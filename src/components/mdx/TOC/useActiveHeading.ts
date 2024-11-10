import { useEffect, useState } from 'react'

import { TOCItem } from './useHeadings'

export function useScroll(headings: TOCItem[]) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        threshold: 0.5,
        rootMargin: `-60px 0px -80% 0px`,
      }
    )

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id)

      if (element) {
        observer.observe(element)
      }

      return () => {
        observer.disconnect()
      }
    })
  }, [headings])

  return { activeId }
}
