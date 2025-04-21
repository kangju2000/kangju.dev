'use client'

import {
  Box,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import { allLogs } from 'contentlayer/generated'
import { useEffect, useMemo, useState } from 'react'

import AllLogsSection from './components/AllLogsSection'
import FeaturedLogsSection from './components/FeaturedLogsSection'
import useLogFilter from './hooks/useLogFilter'
import ChakraMotion from '@/components/common/ChakraMotion'
import { fadeIn } from '@/constants/animations'

const LOGS_PER_PAGE = 10

export default function LogPage() {
  const [activeTab, setActiveTab] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const isMobile = useBreakpointValue({ base: true, md: false })

  const allLogData = useMemo(() => {
    return [...allLogs].sort(
      (a, b) => new Date(b.dateFormatted).getTime() - new Date(a.dateFormatted).getTime()
    )
  }, [])

  const featuredLogs = useMemo(() => {
    return allLogData.filter((log) => !!log.description)
  }, [allLogData])

  const {
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
  } = useLogFilter(allLogData, LOGS_PER_PAGE)

  const { activeYear, activeMonth, currentPage } = filterState

  const optimizedFadeIn = {
    ...fadeIn,
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  }

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <ChakraMotion variants={optimizedFadeIn} initial="initial" animate="animate" exit="exit">
      <Box mb="32px">
        <Heading as="h1" fontSize="3xl" mb="12px">
          개발 로그
        </Heading>
        <Text mb="16px">하루하루 개발한 내용을 기록합니다.</Text>
      </Box>

      {isMobile ? (
        <Tabs
          colorScheme="teal"
          index={activeTab}
          onChange={setActiveTab}
          variant="enclosed"
          isFitted
        >
          <TabList mb="24px">
            <Tab>Featured</Tab>
            <Tab>모든 로그</Tab>
          </TabList>
          <TabPanels>
            <TabPanel p="0">
              <FeaturedLogsSection featuredLogs={featuredLogs} />
            </TabPanel>
            <TabPanel p="0">
              <AllLogsSection
                logs={filteredLogs}
                paginatedLogs={paginatedLogs}
                activeYear={activeYear}
                activeMonth={activeMonth}
                availableYears={availableYears}
                availableMonths={availableMonths}
                currentPage={currentPage}
                totalPages={totalPages}
                onYearClick={handleYearClick}
                onMonthClick={handleMonthClick}
                onPageChange={handlePageChange}
                onResetFilters={handleResetFilters}
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      ) : (
        <Flex direction="column" gap="32px">
          <FeaturedLogsSection featuredLogs={featuredLogs} />
          <AllLogsSection
            logs={filteredLogs}
            paginatedLogs={paginatedLogs}
            activeYear={activeYear}
            activeMonth={activeMonth}
            availableYears={availableYears}
            availableMonths={availableMonths}
            currentPage={currentPage}
            totalPages={totalPages}
            onYearClick={handleYearClick}
            onMonthClick={handleMonthClick}
            onPageChange={handlePageChange}
            onResetFilters={handleResetFilters}
          />
        </Flex>
      )}
    </ChakraMotion>
  )
}
