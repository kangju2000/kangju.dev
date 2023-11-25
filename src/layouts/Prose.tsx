'use client'

import { Prose as ChakraProse } from '@nikolovlazar/chakra-ui-prose'
import { useEffect, type PropsWithChildren } from 'react'

const Prose = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    if (typeof document === 'undefined') return

    const hash = window.decodeURI(location.hash.replace('#', ''))
    if (hash !== '') {
      const element = document.getElementById(hash)
      if (element) {
        const offset = element.offsetTop

        setTimeout(function () {
          window.scrollTo(0, offset - 64)
        }, 0)
      }
    }
  }, [])

  return <ChakraProse>{children}</ChakraProse>
}

export default Prose
