import { extendTheme } from '@chakra-ui/react'
import { withProse } from '@nikolovlazar/chakra-ui-prose'
import { Noto_Sans_KR } from 'next/font/google'

import proseOverrides from '@/styles/prose'

const notoSansKr = Noto_Sans_KR({
  display: 'swap',
  subsets: ['latin'],
})

const theme = extendTheme(
  {
    fonts: {
      heading: notoSansKr.style.fontFamily,
      body: notoSansKr.style.fontFamily,
    },
  },
  withProse(proseOverrides)
)

export default theme
