import { Box, Button, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import { type Log } from 'contentlayer/generated'

import LogCard from './LogCard'
import LogFilter from './LogFilter'
import Pagination from './Pagination'

interface AllLogsSectionProps {
  logs: Log[]
  paginatedLogs: Log[]
  activeYear: string | null
  activeMonth: string | null
  availableYears: string[]
  availableMonths: string[]
  currentPage: number
  totalPages: number
  onYearClick: (year: string) => void
  onMonthClick: (month: string) => void
  onPageChange: (page: number) => void
  onResetFilters: () => void
}

export default function AllLogsSection({
  logs,
  paginatedLogs,
  activeYear,
  activeMonth,
  availableYears,
  availableMonths,
  currentPage,
  totalPages,
  onYearClick,
  onMonthClick,
  onPageChange,
  onResetFilters,
}: AllLogsSectionProps) {
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box>
      <Heading as="h2" fontSize="2xl" mb="16px">
        모든 로그 ({logs.length})
      </Heading>
      <LogFilter
        activeYear={activeYear}
        activeMonth={activeMonth}
        availableYears={availableYears}
        availableMonths={availableMonths}
        onYearClick={onYearClick}
        onMonthClick={onMonthClick}
      />

      {paginatedLogs.length > 0 ? (
        <>
          <Box>
            {paginatedLogs.map((log) => (
              <LogCard key={log._id} log={log} />
            ))}
          </Box>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </>
      ) : (
        <Box
          p="40px"
          textAlign="center"
          borderRadius="lg"
          bg={bgColor}
          borderWidth="1px"
          borderColor={borderColor}
          role="status"
          aria-live="polite"
        >
          <Heading as="h3" fontSize="lg" mb="8px">
            로그를 찾을 수 없습니다
          </Heading>
          <Text mb="16px">필터를 변경해보세요.</Text>
          <Button colorScheme="teal" onClick={onResetFilters} aria-label="필터 초기화">
            필터 초기화
          </Button>
        </Box>
      )}
    </Box>
  )
}
