import { Center, Heading, Spacer, Stack } from '@chakra-ui/react'
import fs from 'fs'
import Link from 'next/link'

import List from '@/components/List/List'

export default function LogPage() {
  const monthList = fs.readdirSync('contents/log')

  return (
    <Stack h="100%">
      <Center>
        <Heading as="h2" fontSize="3xl">
          개발 로그
        </Heading>
      </Center>
      <Spacer />
      <List
        direction="row"
        gap="12px"
        justifyContent="space-between"
        overflow="hidden"
        overflowX="scroll"
        items={monthList}
        renderItem={(month) => (
          <Link href={`/log/${month}`}>
            <Center
              as="li"
              w="100px"
              h="120px"
              borderRadius="16px"
              flexShrink="0"
              cursor="pointer"
              _dark={{
                bg: 'gray.600',
              }}
              _light={{
                bg: 'gray.200',
              }}
            >
              {month}
            </Center>
          </Link>
        )}
      />
    </Stack>
  )
}
