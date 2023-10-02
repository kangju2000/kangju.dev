'use client'

import { Button, Center, Heading, Spacer } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  return (
    <Center flexDir="column" h="100px">
      <Heading as="h1" size="md">
        페이지를 찾을 수 없어요 😢
      </Heading>
      <Spacer />
      <Button onClick={router.back}>돌아가기</Button>
    </Center>
  )
}
