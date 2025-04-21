import { Button, Flex, HStack, Text } from '@chakra-ui/react'
import { useCallback } from 'react'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const MAX_VISIBLE_PAGES = 5

  const handlePageChange = useCallback(
    (page: number) => {
      onPageChange(page)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    [onPageChange]
  )

  if (totalPages <= 1) return null

  const renderPageButtons = () => {
    const pageButtons = []
    const showEllipsis = totalPages > MAX_VISIBLE_PAGES + 2

    let startPage = Math.max(1, currentPage - Math.floor(MAX_VISIBLE_PAGES / 2))
    const endPage = Math.min(totalPages, startPage + MAX_VISIBLE_PAGES - 1)

    if (endPage - startPage < MAX_VISIBLE_PAGES - 1) {
      startPage = Math.max(1, endPage - MAX_VISIBLE_PAGES + 1)
    }

    if (showEllipsis && startPage > 1) {
      pageButtons.push(
        <Button
          key={1}
          size="sm"
          variant={currentPage === 1 ? 'solid' : 'outline'}
          colorScheme={currentPage === 1 ? 'teal' : 'gray'}
          onClick={() => handlePageChange(1)}
          minW="8"
          aria-label="첫 페이지"
          aria-current={currentPage === 1 ? 'page' : undefined}
        >
          1
        </Button>
      )

      if (startPage > 2) {
        pageButtons.push(
          <Text key="ellipsis-start" mx="1" aria-hidden="true">
            …
          </Text>
        )
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(
        <Button
          key={i}
          size="sm"
          variant={currentPage === i ? 'solid' : 'outline'}
          colorScheme={currentPage === i ? 'teal' : 'gray'}
          onClick={() => handlePageChange(i)}
          minW="8"
          aria-label={`${i} 페이지`}
          aria-current={currentPage === i ? 'page' : undefined}
          fontWeight={currentPage === i ? 'bold' : 'normal'}
        >
          {i}
        </Button>
      )
    }

    if (showEllipsis && endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageButtons.push(
          <Text key="ellipsis-end" mx="1" aria-hidden="true">
            …
          </Text>
        )
      }

      pageButtons.push(
        <Button
          key={totalPages}
          size="sm"
          variant={currentPage === totalPages ? 'solid' : 'outline'}
          colorScheme={currentPage === totalPages ? 'teal' : 'gray'}
          onClick={() => handlePageChange(totalPages)}
          minW="8"
          aria-label="마지막 페이지"
          aria-current={currentPage === totalPages ? 'page' : undefined}
        >
          {totalPages}
        </Button>
      )
    }

    return pageButtons
  }

  return (
    <Flex justify="center" mt="6" role="navigation" aria-label="페이지네이션">
      <HStack spacing="2">
        <Button
          size="sm"
          variant="outline"
          isDisabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          aria-label="이전 페이지"
          px="3"
        >
          이전
        </Button>

        {renderPageButtons()}

        <Button
          size="sm"
          variant="outline"
          isDisabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          aria-label="다음 페이지"
          px="3"
        >
          다음
        </Button>
      </HStack>
    </Flex>
  )
}
