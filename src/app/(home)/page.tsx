import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'

import ChakraMotion from '@/components/ChakraMotion/ChakraMotion'
import { GithubIcon, LinkedInIcon } from '@/components/Icons/LogoIcons'

export default function Home() {
  return (
    <ChakraMotion initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Box>
        <Heading size="lg">강주혁 · Juhyeok Kang</Heading>
        <Text mt="15px">새로운 것에 관심이 많은 개발자입니다.</Text>
        <Flex gap="10px" mt="15px">
          <Link href="https://github.com/kangju2000/" target="_blank">
            <GithubIcon />
          </Link>
          <Link href="https://www.linkedin.com/in/kangju2000/" target="_blank">
            <LinkedInIcon />
          </Link>
        </Flex>

        {/* <Heading size="md" mt="30px">
          최근 포스트
        </Heading>
        <Flex>
          <Box>포스트 1</Box>
          <Box>포스트 2</Box>
          <Box>포스트 3</Box>
        </Flex> */}
      </Box>
    </ChakraMotion>
  )
}
