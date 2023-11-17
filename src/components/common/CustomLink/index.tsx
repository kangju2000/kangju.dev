import Link from 'next/link'
import { type AnchorHTMLAttributes } from 'react'

const CustomLink = ({ href, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const isInternalLink = href && href.startsWith('/')
  const isMDXLink = href && href.startsWith('20')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink || isMDXLink) {
    return <Link href={href} {...props} />
  }

  if (isAnchorLink) {
    return (
      <a
        {...props}
        href={href}
        style={{
          width: '100px',
          color: 'inherit',
          textDecoration: 'none',
          fontWeight: 'inherit',
        }}
        className="anchor"
      />
    )
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...props} />
}

export default CustomLink
