'use client'

import { allLogs } from 'contentlayer/generated'
import { format } from 'date-fns'
import { ko } from 'date-fns/locale'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'
import DatePicker from 'react-datepicker'

import { getLocalStorage, setLocalStorage } from '@/utils/localStorage'

import 'react-datepicker/dist/react-datepicker.css'

const Calendar = () => {
  const router = useRouter()
  const minDate = useMemo(() => new Date('2023-05-01'), [])
  const today = useMemo(() => new Date(), [])
  const tommorow = useMemo(() => new Date(today.setDate(today.getDate() + 1)), [today])

  const selectedDate = getLocalStorage('selectedDate')

  return (
    <DatePicker
      locale={ko}
      selected={selectedDate ? new Date(selectedDate) : today}
      minDate={minDate}
      maxDate={tommorow}
      filterDate={(date) => {
        const dateString = 'log/' + format(date, 'yy.MM/MM.dd')
        const logs = allLogs.find((log) => log.slug === dateString)
        return !!logs
      }}
      onChange={(date: Date) => {
        setLocalStorage('selectedDate', date.toDateString())
        router.push(`/log/${format(date, 'yy.MM/MM.dd')}`)
      }}
      inline
    />
  )
}

export default Calendar
