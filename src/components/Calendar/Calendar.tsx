'use client'

import { Link } from '@chakra-ui/next-js'
import { Center, Text } from '@chakra-ui/react'
import { allLogs } from 'contentlayer/generated'
import { format } from 'date-fns'
import { ko } from 'date-fns/locale'
import { useMemo, useState } from 'react'
import DatePicker from 'react-datepicker'

import { LeftIcon, RightIcon } from '../Icons/CommonIcons'

import 'react-datepicker/dist/react-datepicker.css'

interface CalendarProps {
  slugDate?: string
}

const Calendar = ({ slugDate }: CalendarProps) => {
  const minDate = useMemo(() => new Date('2023-05-01'), [])
  const today = useMemo(() => new Date(), [])
  const tommorow = useMemo(() => new Date(today.setDate(today.getDate() + 1)), [today])
  const [selectedDate, setSelectedDate] = useState(slugDate || null)

  return (
    <DatePicker
      locale={ko}
      selected={selectedDate ? new Date(selectedDate) : null}
      minDate={minDate}
      maxDate={tommorow}
      filterDate={(date) => {
        const log = allLogs.find((log) => log.dateFormatted === format(date, 'yyyy-MM-dd'))
        return !!log
      }}
      onChange={(date: Date) => setSelectedDate(date.toDateString())}
      renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
        <Center _dark={{ color: 'gray.50' }} _light={{ color: 'gray.800' }}>
          <LeftIcon onClick={decreaseMonth} w="24px" h="24px" cursor="pointer" />
          <Text fontSize="lg" fontWeight="bold" mx="8px">
            {format(date, 'yyyy년 MM월')}
          </Text>
          <RightIcon onClick={increaseMonth} w="24px" h="24px" cursor="pointer" />
        </Center>
      )}
      renderMonthContent={(monthIndex, shortMonthText) => {
        return (
          <Text
            fontSize="lg"
            fontWeight="bold"
            _dark={{ color: 'gray.50' }}
            _light={{ color: 'gray.800' }}
          >
            {shortMonthText}
          </Text>
        )
      }}
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
      fixedHeight
      inline
    />
  )
}

export default Calendar
