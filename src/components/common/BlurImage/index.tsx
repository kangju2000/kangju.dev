'use client'

import Image, { type ImageProps } from 'next/image'
import { useState } from 'react'

const BlurImage = ({ src, ...props }: ImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <Image
      {...props}
      alt={props.alt || ''}
      src={src}
      style={{
        aspectRatio: 'auto',
        filter: isLoaded ? 'none' : 'blur(5px)',
        transition: 'filter 0.2s ease-in-out',
        ...props.style,
      }}
      onLoadingComplete={() => setIsLoaded(true)}
    />
  )
}

export default BlurImage
