'use client'

import { Box, Flex, Icon } from '@chakra-ui/react'
import { Log } from 'contentlayer/generated'
import { motion } from 'framer-motion'
import { FiCalendar } from 'react-icons/fi'

import ChakraMotion from '@/components/common/ChakraMotion'

interface TimelineProps {
  logs: Log[]
}

export default function Timeline({ logs }: TimelineProps) {
  return (
    <Box
      display={{ base: 'none', md: 'block' }}
      position="relative"
      _after={{
        content: '""',
        position: 'absolute',
        top: '24px',
        bottom: '0',
        right: '50%',
        width: '2px',
        bg: 'teal.500',
        zIndex: 0,
      }}
    >
      {logs.map((log, index) => (
        <Box key={log._id} position="relative" height="100px" mb="16px">
          <ChakraMotion
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            position="absolute"
            right="0"
            top="0"
            zIndex="1"
          >
            <Flex
              align="center"
              justify="center"
              bg={log.description ? 'teal.500' : 'gray.500'}
              color="white"
              borderRadius="full"
              w="40px"
              h="40px"
              boxShadow="md"
              as={motion.div}
              whileHover={{ scale: 1.1 }}
            >
              <Icon as={FiCalendar} />
            </Flex>
          </ChakraMotion>
        </Box>
      ))}
    </Box>
  )
}
