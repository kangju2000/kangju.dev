import { Box, Center, Heading, Text } from '@chakra-ui/react'

import MDXContent from '../MDXContent'
import BlurImage from '@/components/common/BlurImage'
import ChakraMotion from '@/components/common/ChakraMotion'
import Giscus from '@/components/common/Giscus'
import { fadeIn, staggerTwo } from '@/constants/animations'

import type { Post } from 'contentlayer/generated'

interface MDXPostProps {
  post: Post
}

const MDXPost = ({ post }: MDXPostProps) => {
  return (
    <ChakraMotion variants={staggerTwo} initial="initial" animate="animate">
      <ChakraMotion variants={fadeIn}>
        <Center
          pos="relative"
          w="100%"
          minH="250px"
          p="24px"
          flexDirection="column"
          borderRadius="16px"
          overflow="hidden"
        >
          <Box pos="absolute" top="0" left="0" w="100%" h="100%" bg="blackAlpha.500" zIndex="1" />
          <BlurImage
            src={post.thumbnail}
            alt="thumbnail"
            style={{ objectFit: 'cover', filter: 'blur(10px)', opacity: 0.7, scale: 1.1 }}
            fill
          />

          <Center flexDirection="column" zIndex="1" h="100%" color="white" textAlign="center">
            <Heading as="h2" mb={{ base: '12px', sm: '18px' }} wordBreak="break-all">
              {post.title}
            </Heading>
            <Heading as="h3" fontSize="sm" fontWeight="700" color="gray.100">
              {post.description}
            </Heading>
            <Text pos="absolute" bottom={6} fontSize="sm" fontWeight="700" color="gray.100">
              {post.dateFormatted} | {post.readTime.text}
            </Text>
          </Center>
        </Center>
      </ChakraMotion>

      <ChakraMotion variants={fadeIn}>
        <Box position="relative" maxW="1200px" mx="auto">
          <MDXContent code={post.body.code} />
        </Box>
      </ChakraMotion>
      <Giscus />
    </ChakraMotion>
  )
}

export default MDXPost
