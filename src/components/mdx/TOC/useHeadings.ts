import { useEffect, useState } from 'react'

export type TOCItem = {
  id: string
  text: string
  level: number
}

export function useHeadings() {
  const [headings, setHeadings] = useState<TOCItem[]>([])

  useEffect(() => {
    const mdxContent = document.querySelector('#mdx-content')

    if (!mdxContent) {
      return
    }

    const headingsArray = Array.from(mdxContent.querySelectorAll('h1, h2, h3')).map((element) => ({
      id: element.id,
      text: element.textContent ?? '',
      level: parseInt(element.tagName.slice(1)),
    }))

    setHeadings(headingsArray)
  }, [])

  return headings
}
