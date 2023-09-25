import { Box, ColorModeScript, type ThemeConfig } from '@chakra-ui/react'

import Providers from './Providers'
import Header from '@/components/Header/Header'

import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'

import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'kangju.dev',
  description: '프론트엔드 개발자 강주혁입니다.',
}

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ColorModeScript initialColorMode={config.initialColorMode} />
        <Providers>
          <Header />
          <Box
            as="main"
            maxW="700px"
            m="0 auto"
            p={{
              base: '80px 16px',
              md: '80px 24px',
            }}
          >
            {children}
          </Box>
        </Providers>
      </body>
    </html>
  )
}
