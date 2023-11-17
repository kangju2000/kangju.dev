import Image, { type ImageProps } from 'next/image'
import { useState } from 'react'

const BlurImage = ({ src, ...props }: ImageProps) => {
  const [isLoaded, setIsLoaded] = useState(true)

  return (
    <Image
      {...props}
      alt={props.alt || ''}
      src={src}
      style={{
        aspectRatio: 'auto',
        filter: isLoaded ? 'none' : 'blur(5px)',
        ...props.style,
      }}
      onLoadingComplete={() => setIsLoaded(true)}
    />
  )
}

export default BlurImage
