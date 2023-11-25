'use client'

import { Prose as ChakraProse } from '@nikolovlazar/chakra-ui-prose'

import type { PropsWithChildren } from 'react'

const Prose = ({ children }: PropsWithChildren) => {
  return <ChakraProse>{children}</ChakraProse>
}

export default Prose
