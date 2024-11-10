'use client'

import { Box, Link, VStack, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import { useScroll } from './useActiveHeading'
import { useHeadings } from './useHeadings'

const TOC = () => {
  const headings = useHeadings()

  const { activeId } = useScroll(headings)

  const textColor = useColorModeValue('gray.700 !important', 'gray.300 !important')
  const activeColor = useColorModeValue('blue.600 !important', 'blue.300 !important')
  const hoverBgColor = useColorModeValue('gray.50 !important', 'gray.700 !important')

  const containerVariants = {
    initial: { opacity: 0, x: 20, filter: 'blur(10px)' },
    animate: { opacity: 1, x: 0, filter: 'blur(0px)' },
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()

    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <Box
      position="fixed"
      right={{ xl: '40px', '2xl': '80px' }}
      top="120px"
      maxHeight="calc(100vh - 200px)"
      overflowY="auto"
      display={{ base: 'none', xl: 'block' }}
      p="20px"
      sx={{
        '& a': {
          textDecoration: 'none !important',
          color: `${textColor}`,
          '&[data-active="true"]': {
            color: `${activeColor}`,
          },
        },
      }}
      css={{
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: useColorModeValue('gray.300 !important', 'gray.600 !important'),
          borderRadius: '24px',
        },
      }}
    >
      <VStack align="flex-start" spacing={2}>
        {headings.map((item, index) => (
          <motion.div
            key={item.id + item.level}
            variants={containerVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: index * 0.07 }}
            style={{ width: '100%' }}
          >
            <Link
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              width="100%"
              px={`${(item.level - 1) * 16}px`}
              py={1}
              data-active={activeId === item.id}
              _hover={{ backgroundColor: hoverBgColor }}
              fontSize="sm"
              transition="all 0.2s"
              borderRadius="md"
              fontWeight="normal !important"
              display="block"
            >
              {item.text}
            </Link>
          </motion.div>
        ))}
      </VStack>
    </Box>
  )
}

export default TOC
