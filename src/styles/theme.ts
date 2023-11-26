import { extendTheme } from '@chakra-ui/react'
import { withProse } from '@nikolovlazar/chakra-ui-prose'
import { Noto_Sans_KR } from 'next/font/google'

import proseOverrides from '@/styles/prose'

const notoSansKr = Noto_Sans_KR({
  weight: ['400', '700', '900'],
  style: 'normal',
  display: 'swap',
  subsets: ['latin'],
})

const fonts = {
  heading: notoSansKr.style.fontFamily,
  body: notoSansKr.style.fontFamily,
}

const theme = extendTheme(
  {
    fonts,
  },
  withProse(proseOverrides)
)

export default theme
