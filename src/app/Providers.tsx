'use client'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Noto_Sans_KR } from '@next/font/google'

import type { PropsWithChildren } from 'react'

const notoSansKr = Noto_Sans_KR({
  display: 'swap',
  weight: ['400', '700', '900'],
  subsets: ['latin'],
})

const theme = extendTheme({
  fonts: {
    heading: notoSansKr.style.fontFamily,
    body: notoSansKr.style.fontFamily,
  },
})

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  )
}

export default Providers
