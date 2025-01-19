import { extendTheme } from '@chakra-ui/react'
import { withProse } from '@nikolovlazar/chakra-ui-prose'
import { JetBrains_Mono, IBM_Plex_Sans_KR } from 'next/font/google'

import proseOverrides from '@/styles/prose'

const ibmPlexSansKr = IBM_Plex_Sans_KR({
  weight: ['400', '500', '700'],
  style: 'normal',
  display: 'swap',
  subsets: ['latin'],
})

const jetBrainsMono = JetBrains_Mono({
  weight: ['400', '700'],
  style: 'normal',
  display: 'swap',
  subsets: ['latin'],
})

const fonts = {
  heading: ibmPlexSansKr.style.fontFamily,
  body: ibmPlexSansKr.style.fontFamily,
  mono: jetBrainsMono.style.fontFamily,
}

const theme = extendTheme({ fonts }, withProse(proseOverrides))

export default theme
