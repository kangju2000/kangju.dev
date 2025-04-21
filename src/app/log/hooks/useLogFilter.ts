import { type Log } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useMemo, useRef, useState } from 'react'

export interface LogFilterState {
  activeYear: string | null
  activeMonth: string | null
  currentPage: number
}

const STORAGE_KEY = 'log_filter_state'

export default function useLogFilter(logs: Log[], logsPerPage: number = 10) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const prevStateRef = useRef<LogFilterState | null>(null)

  const initialState = useMemo<LogFilterState>(() => {
    const isBrowser = typeof window !== 'undefined'

    const yearFromUrl = searchParams.get('year')
    const monthFromUrl = searchParams.get('month')
    const pageFromUrl = searchParams.get('page')

    let savedState: LogFilterState | null = null

    if (isBrowser) {
      try {
        const savedData = localStorage.getItem(STORAGE_KEY)
        if (savedData) {
          savedState = JSON.parse(savedData)
        }
      } catch (error) {
        console.error('Failed to parse saved filter state:', error)
      }
    }

    return {
      activeYear: yearFromUrl || savedState?.activeYear || null,
      activeMonth: monthFromUrl || savedState?.activeMonth || null,
      currentPage: pageFromUrl ? parseInt(pageFromUrl, 10) : savedState?.currentPage || 1,
    }
  }, [searchParams])

  const [filterState, setFilterState] = useState<LogFilterState>(initialState)

  const { activeYear, activeMonth, currentPage } = filterState

  useEffect(() => {
    if (typeof window === 'undefined') return

    if (
      prevStateRef.current?.activeYear === activeYear &&
      prevStateRef.current?.activeMonth === activeMonth &&
      prevStateRef.current?.currentPage === currentPage
    ) {
      return
    }

    prevStateRef.current = { activeYear, activeMonth, currentPage }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(filterState))

    const params = new URLSearchParams(searchParams.toString())

    params.delete('year')
    params.delete('month')
    params.delete('page')

    if (activeYear) params.set('year', activeYear)
    if (activeMonth) params.set('month', activeMonth)
    if (currentPage > 1) params.set('page', currentPage.toString())

    const queryString = params.toString()
    const newUrl = queryString ? `${pathname}?${queryString}` : pathname

    if (window.location.pathname + window.location.search !== newUrl) {
      router.replace(newUrl, { scroll: false })
    }
  }, [filterState, pathname, router, searchParams])

  const logsByYearAndMonth = useMemo<Record<string, Record<string, Log[]>>>(() => {
    const grouped: Record<string, Record<string, Log[]>> = {}

    logs.forEach((log) => {
      const date = parseISO(log.dateFormatted)
      const year = format(date, 'yyyy')
      const month = format(date, 'MM')

      if (!grouped[year]) {
        grouped[year] = {}
      }

      if (!grouped[year][month]) {
        grouped[year][month] = []
      }

      grouped[year][month].push(log)
    })

    return grouped
  }, [logs])

  const availableYears = useMemo<string[]>(() => {
    return Object.keys(logsByYearAndMonth).sort((a, b) => parseInt(b) - parseInt(a))
  }, [logsByYearAndMonth])

  const availableMonths = useMemo<string[]>(() => {
    if (!activeYear) return []
    return Object.keys(logsByYearAndMonth[activeYear] || {}).sort(
      (a, b) => parseInt(b) - parseInt(a)
    )
  }, [logsByYearAndMonth, activeYear])

  const filteredLogs = useMemo<Log[]>(() => {
    let filteredLogs = logs

    if (activeYear) {
      filteredLogs = filteredLogs.filter((log) => {
        const date = parseISO(log.dateFormatted)
        return format(date, 'yyyy') === activeYear
      })
    }

    if (activeMonth) {
      filteredLogs = filteredLogs.filter((log) => {
        const date = parseISO(log.dateFormatted)
        return format(date, 'MM') === activeMonth
      })
    }

    return filteredLogs
  }, [logs, activeYear, activeMonth])

  const paginatedLogs = useMemo<Log[]>(() => {
    const startIndex = (currentPage - 1) * logsPerPage
    return filteredLogs.slice(startIndex, startIndex + logsPerPage)
  }, [filteredLogs, currentPage, logsPerPage])

  const totalPages = useMemo<number>(() => {
    return Math.ceil(filteredLogs.length / logsPerPage)
  }, [filteredLogs, logsPerPage])

  const handleYearClick = (year: string) => {
    setFilterState((prev) => ({
      ...prev,
      activeYear: prev.activeYear === year ? null : year,
      activeMonth: null,
      currentPage: 1,
    }))
  }

  const handleMonthClick = (month: string) => {
    setFilterState((prev) => ({
      ...prev,
      activeMonth: prev.activeMonth === month ? null : month,
      currentPage: 1,
    }))
  }

  const handlePageChange = (page: number) => {
    setFilterState((prev) => ({
      ...prev,
      currentPage: page,
    }))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleResetFilters = () => {
    setFilterState({
      activeYear: null,
      activeMonth: null,
      currentPage: 1,
    })
  }

  return {
    filterState,
    filteredLogs,
    paginatedLogs,
    availableYears,
    availableMonths,
    totalPages,
    handleYearClick,
    handleMonthClick,
    handlePageChange,
    handleResetFilters,
  }
}
