'use client'

import { chakra } from '@chakra-ui/react'

interface YoutubeProps {
  id: string
}

const Youtube = ({ id }: YoutubeProps) => {
  return (
    <figure>
      <chakra.iframe
        title="YouTube"
        src={`https://www.youtube.com/embed/${id}`}
        w="100%"
        maxH="400px"
        aspectRatio="16/9"
        margin="16px auto"
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius="8px"
        border="2px solid var(--chakra-colors-gray-600)"
      ></chakra.iframe>
    </figure>
  )
}

export default Youtube
