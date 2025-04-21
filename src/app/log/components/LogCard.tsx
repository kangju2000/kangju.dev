'use client'

import {
  Badge,
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Link,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { Log } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import { FiClock, FiTag } from 'react-icons/fi'

interface LogCardProps {
  log: Log
}

export default function LogCard({ log }: LogCardProps) {
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const hasFeatured = !!log.description

  return (
    <Box
      p="16px"
      borderRadius="lg"
      bg={bgColor}
      boxShadow="sm"
      borderWidth="1px"
      borderColor={borderColor}
      position="relative"
      mb="16px"
      overflow="hidden"
      _hover={{ boxShadow: 'md' }}
      transition="box-shadow 0.2s"
      _after={
        hasFeatured
          ? {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '4px',
              height: '100%',
              bg: 'teal.500',
            }
          : undefined
      }
    >
      <Flex justify="space-between" align="center" mb="8px">
        <HStack spacing="6px">
          <Icon as={FiClock} color="gray.500" fontSize="sm" />
          <Text fontSize="xs" color="gray.500">
            {format(parseISO(log.dateFormatted), 'yyyy년 MM월 dd일')}
          </Text>
        </HStack>
        <Badge colorScheme="teal" borderRadius="full" px="6px" fontSize="xs">
          <HStack spacing="4px">
            <Icon as={FiTag} fontSize="10px" />
            <Text>{format(parseISO(log.dateFormatted), 'yyyy-MM')}</Text>
          </HStack>
        </Badge>
      </Flex>

      <Link href={`/log/${log.dateFormatted}`} _hover={{ textDecoration: 'none' }}>
        <Heading as="h3" fontSize="md" mb="8px" noOfLines={2}>
          {log.description || `${log.dateFormatted} 개발 로그`}
        </Heading>

        {log.body.raw && (
          <Text noOfLines={2} color="gray.500" fontSize="sm">
            {log.body.raw.substring(0, 120)}...
          </Text>
        )}
      </Link>
    </Box>
  )
}
