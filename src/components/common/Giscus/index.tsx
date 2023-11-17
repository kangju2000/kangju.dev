'use client'

import { useColorMode } from '@chakra-ui/react'
import { useEffect, useRef } from 'react'

const Giscus = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { colorMode } = useColorMode()

  useEffect(() => {
    if (!ref.current) return

    const script = document.createElement('script')
    script.src = 'https://giscus.app/client.js'
    script.setAttribute('data-repo', 'kangju2000/next-blog')
    script.setAttribute('data-repo-id', 'R_kgDOKXQbJQ')
    script.setAttribute('data-category', 'General')
    script.setAttribute('data-category-id', 'DIC_kwDOKXQbJc4CZ4HM')
    script.setAttribute('data-mapping', 'pathname')
    script.setAttribute('data-strict', '0')
    script.setAttribute('data-reactions-enabled', '1')
    script.setAttribute('data-emit-metadata', '0')
    script.setAttribute('data-input-position', 'bottom')
    script.setAttribute('data-theme', colorMode)
    script.setAttribute('data-lang', 'ko')
    script.setAttribute('cross-origin', 'anonymous')
    script.async = true

    ref.current?.appendChild(script)
  }, [])

  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame')
    iframe?.contentWindow?.postMessage(
      { giscus: { setConfig: { theme: colorMode } } },
      'https://giscus.app'
    )
  }, [colorMode])

  return <section ref={ref} />
}

export default Giscus
