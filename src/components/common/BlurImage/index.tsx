import Image, { type ImageProps } from 'next/image'

import getBase64 from '@/utils/getBase64'

const BlurImage = async ({ src, ...props }: ImageProps & { src: string }) => {
  const base64 = await getBase64(src)

  return (
    <Image
      {...props}
      alt={props.alt || ''}
      src={src}
      placeholder="blur"
      blurDataURL={base64}
      style={{
        ...props.style,
        transition: 'opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    />
  )
}

export default BlurImage
