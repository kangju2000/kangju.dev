'use client'

import { Link } from '@chakra-ui/next-js'
import { Center, Text } from '@chakra-ui/react'
import { allLogs } from 'contentlayer/generated'
import { format } from 'date-fns'
import { ko } from 'date-fns/locale'
import { useMemo, useState } from 'react'
import DatePicker from 'react-datepicker'

import { LeftIcon, RightIcon } from '../Icons/CommonIcons'
import { getLocalCookie, setLocalCookie } from '@/utils/cookieStorage'

import 'react-datepicker/dist/react-datepicker.css'

interface CalendarProps {
  selectedDate?: string
}

const Calendar = ({ selectedDate: cookieDate }: CalendarProps) => {
  const minDate = useMemo(() => new Date('2023-05-01'), [])
  const today = useMemo(() => new Date(), [])
  const tommorow = useMemo(() => new Date(today.setDate(today.getDate() + 1)), [today])
  const [selectedDate, setSelectedDate] = useState(cookieDate || getLocalCookie('selectedDate'))

  return (
    <DatePicker
      locale={ko}
      selected={selectedDate ? new Date(selectedDate) : today}
      minDate={minDate}
      maxDate={tommorow}
      filterDate={(date) => {
        const log = allLogs.find((log) => log.dateFormatted === format(date, 'yyyy-MM-dd'))
        return !!log
      }}
      onChange={(date: Date) => {
        setLocalCookie('selectedDate', date.toDateString())
        setSelectedDate(date.toDateString())
      }}
      inline
      renderDayContents={(day, date: Date) => {
        const log = allLogs.find((log) => log.dateFormatted === format(date, 'yyyy-MM-dd'))

        if (!log) {
          return <Center>{day}</Center>
        }

        return (
          <Link
            href={`/log/${log.dateFormatted}`}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {day}
          </Link>
        )
      }}
      renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
        <Center>
          <LeftIcon onClick={decreaseMonth} w="24px" h="24px" cursor="pointer" />
          <Text fontSize="lg" fontWeight="bold" mx="8px">
            {format(date, 'yyyy년 MM월')}
          </Text>
          <RightIcon onClick={increaseMonth} w="24px" h="24px" cursor="pointer" />
        </Center>
      )}
    />
  )
}

export default Calendar
