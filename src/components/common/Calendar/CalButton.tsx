'use client'

import { Button, type ButtonProps } from '@chakra-ui/react'

const CalButton = ({ onClick, children, ...props }: ButtonProps) => {
  return (
    <Button onClick={onClick} w="50px" h="50px" borderRadius="full" cursor="pointer" {...props}>
      {children}
    </Button>
  )
}

export default CalButton
