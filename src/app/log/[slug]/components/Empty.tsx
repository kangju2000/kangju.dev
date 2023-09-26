'use client'
import { Button, Center, Spacer, Text } from '@chakra-ui/react'
import { useParams, useRouter } from 'next/navigation'

const Empty = () => {
  const router = useRouter()
  const { slug } = useParams() as { slug: string }

  const [year, month] = slug.split('.')

  return (
    <Center as="li" h="100px" flexDirection="column" borderRadius="16px">
      <Text>
        <b>
          {year}년 {month}월
        </b>
        엔 로그를 올리지 못했어요..🥲
      </Text>
      <Spacer />
      <Button onClick={router.back}>돌아가기</Button>
    </Center>
  )
}

export default Empty
