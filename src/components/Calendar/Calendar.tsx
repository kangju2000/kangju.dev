'use client'

import { allLogs } from 'contentlayer/generated'
import { ko } from 'date-fns/locale'
import { useMemo, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const Calendar = () => {
  const currentDate = useMemo(() => new Date(), [])

  const [startDate, setStartDate] = useState(currentDate)

  return (
    <DatePicker
      locale={ko}
      selected={startDate}
      minDate={new Date('2023-05-01')}
      maxDate={currentDate}
      filterDate={(date) => {
        const isExist = allLogs.find((log) => {
          return new Date(log.date).getTime() === date.getTime()
        })

        return !!isExist
      }}
      onChange={(date: Date) => setStartDate(date)}
      inline
    />
  )
}

export default Calendar
