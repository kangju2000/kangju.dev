import { Button, Flex, HStack } from '@chakra-ui/react'
import { format, parseISO } from 'date-fns'
import { ko } from 'date-fns/locale'

interface LogFilterProps {
  activeYear: string | null
  activeMonth: string | null
  availableYears: string[]
  availableMonths: string[]
  onYearClick: (year: string) => void
  onMonthClick: (month: string) => void
}

export default function LogFilter({
  activeYear,
  activeMonth,
  availableYears,
  availableMonths,
  onYearClick,
  onMonthClick,
}: LogFilterProps) {
  const formatMonthName = (month: string) => {
    return format(parseISO(`2023-${month}-01`), 'MMMM', { locale: ko })
  }

  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      gap="12px"
      mb="24px"
      align={{ base: 'stretch', md: 'center' }}
      wrap="wrap"
    >
      <HStack
        spacing="6px"
        overflow="auto"
        pb="4px"
        flexWrap={{ base: 'nowrap', md: 'wrap' }}
        w={{ base: '100%', md: 'auto' }}
      >
        {availableYears.map((year) => (
          <Button
            key={year}
            size="xs"
            variant={activeYear === year ? 'solid' : 'outline'}
            colorScheme={activeYear === year ? 'teal' : 'gray'}
            borderRadius="md"
            onClick={() => onYearClick(year)}
            minW="60px"
          >
            {year}년
          </Button>
        ))}
      </HStack>

      {activeYear && availableMonths.length > 0 && (
        <HStack
          spacing="6px"
          overflow="auto"
          pb="4px"
          flexWrap={{ base: 'nowrap', md: 'wrap' }}
          w={{ base: '100%', md: 'auto' }}
        >
          {availableMonths.map((month) => (
            <Button
              key={month}
              size="xs"
              variant={activeMonth === month ? 'solid' : 'outline'}
              colorScheme={activeMonth === month ? 'teal' : 'gray'}
              borderRadius="md"
              onClick={() => onMonthClick(month)}
            >
              {formatMonthName(month)}
            </Button>
          ))}
        </HStack>
      )}
    </Flex>
  )
}
