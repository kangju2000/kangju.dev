import { type Log } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import { useMemo, useState } from 'react'

export interface LogFilterState {
  activeYear: string | null
  activeMonth: string | null
  currentPage: number
}

export default function useLogFilter(logs: Log[], logsPerPage: number = 10) {
  const [filterState, setFilterState] = useState<LogFilterState>({
    activeYear: null,
    activeMonth: null,
    currentPage: 1,
  })

  const { activeYear, activeMonth, currentPage } = filterState

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
