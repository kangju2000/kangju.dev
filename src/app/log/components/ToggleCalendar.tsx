'use client'

import { Box } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'

import CalButton from '@/components/Calendar/CalButton'
import Calendar from '@/components/Calendar/Calendar'
import ChakraMotion from '@/components/ChakraMotion/ChakraMotion'
import { CalendarIcon } from '@/components/Icons/CommonIcons'
import { useOnClickOutside } from '@/hooks/useOnClickOutside'

interface ToggleCalendarProps {
  selectedDate?: string
}

const ToggleCalendar = ({ selectedDate }: ToggleCalendarProps) => {
  const [isOpen, setIsOpen] = useState(false)
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
            bg="gray.700"
            borderRadius="8px"
            p="8px"
          >
            <Calendar selectedDate={selectedDate} />
          </ChakraMotion>
        )}
      </AnimatePresence>
    </Box>
  )
}

export default ToggleCalendar
