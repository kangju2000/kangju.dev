import { Box } from '@chakra-ui/react'

import BlurImage from '@/components/common/BlurImage'

interface ImageProps {
  src: string
  alt: string
  width: number
  height: number
}

const Image = ({ src, alt, width, height }: ImageProps) => {
  return (
    <>
      <Box as="span" pos="relative" w="100%" h="100%">
        <BlurImage
          src={src}
          alt={alt}
          width={width}
          height={height}
          style={{
            borderRadius: '8px',
          }}
        />
      </Box>
      <Box fontSize="sm" color="gray.500" p={2} as="span">
        {alt}
      </Box>
    </>
  )
}

export default Image
