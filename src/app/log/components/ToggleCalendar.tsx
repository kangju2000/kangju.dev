'use client'

import { Box } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import { useParams } from 'next/navigation'
import { useRef, useState } from 'react'

import CalButton from '@/components/Calendar/CalButton'
import Calendar from '@/components/Calendar/Calendar'
import ChakraMotion from '@/components/ChakraMotion/ChakraMotion'
import { CalendarIcon } from '@/components/Icons/CommonIcons'
import { useOnClickOutside } from '@/hooks/useOnClickOutside'

const ToggleCalendar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { slug } = useParams() as { slug?: string }
  const ref = useRef(null)

  useOnClickOutside(ref, () => setIsOpen(false))

  return (
    <Box ref={ref}>
      <CalButton onClick={() => setIsOpen(!isOpen)} m="20px">
        <CalendarIcon />
      </CalButton>
      <AnimatePresence>
        {isOpen && (
          <ChakraMotion
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            pos="absolute"
            bottom="100%"
            right="20px"
            // bg={{
            //   dark: 'gray.800',
            //   light: 'gray.50',
            // }}
            _light={{ bg: 'gray.50' }}
            _dark={{ bg: 'gray.700' }}
            borderRadius="8px"
            p="8px"
          >
            <Calendar slugDate={slug} />
          </ChakraMotion>
        )}
      </AnimatePresence>
    </Box>
  )
}

export default ToggleCalendar
