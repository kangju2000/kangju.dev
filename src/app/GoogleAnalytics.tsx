'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'
import { useEffect } from 'react'

import * as gtag from '@/utils/ga'

export default function GoogleAnalytics() {
  const pathname = usePathname()
  const query = useSearchParams()

  useEffect(() => {
    gtag.pageview(pathname + query)
  }, [pathname, query])

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gtag.GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                  });
                `,
        }}
      />
    </>
  )
}
