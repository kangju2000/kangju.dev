import { Box, ColorModeScript, type ThemeConfig } from '@chakra-ui/react'
import { Suspense, type PropsWithChildren } from 'react'

import GoogleAnalytics from './GoogleAnalytics'
import Providers from './Providers'
import Header from '@/components/Header/Header'
import { BASE_WEB_URL } from '@/constants'

import type { Metadata } from 'next'

import '@/styles/globals.css'
import '@/styles/calendar.css'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_WEB_URL),
  title: {
    template: '%s | kangju.dev',
    default: 'kangju.dev',
  },
  description: '프론트엔드 개발자 강주혁입니다.',
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: {
      template: '%s | kangju.dev',
      default: 'kangju.dev',
    },
    description: '프론트엔드 개발자 강주혁입니다.',
    type: 'website',
    locale: 'ko',
    url: BASE_WEB_URL,
    images: [
      {
        url: '/icon.svg',
        alt: 'kangju.dev',
      },
    ],
  },
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
              minW="320px"
              minH="calc(100vh - 64px)"
              m="0 auto"
              mt="64px"
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
