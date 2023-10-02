import { Box, ColorModeScript, type ThemeConfig } from '@chakra-ui/react'
import { Suspense, type PropsWithChildren } from 'react'

import GoogleAnalytics from './GoogleAnalytics'
import Providers from './Providers'
import Header from '@/components/Header/Header'

import type { Metadata } from 'next'

import '@/styles/globals.css'
import '@/styles/calendar.css'

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
        <Suspense fallback={null}>
          <ColorModeScript initialColorMode={config.initialColorMode} />
          {process.env.NODE_ENV === 'production' && <GoogleAnalytics />}
          <Providers>
            <Header />
            <Box
              as="main"
              maxW="700px"
              h="calc(100vh - 64px)"
              m="0 auto"
              p={{
                base: '50px 16px',
                md: '50px 24px',
              }}
            >
              {children}
            </Box>
          </Providers>
        </Suspense>
      </body>
    </html>
  )
}
