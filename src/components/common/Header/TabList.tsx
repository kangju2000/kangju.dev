'use client'

import { Link } from '@chakra-ui/next-js'
import { Text } from '@chakra-ui/react'
import { usePathname } from 'next/navigation'

import ChakraMotion from '../ChakraMotion'
import List from '@/components/common/List'

interface TabListProps {
  links: {
    href: string
    label: string
  }[]
}

const TabList = ({ links }: TabListProps) => {
  const pathname = usePathname()
  const currentType = `/${pathname.split('/')[1]}`

  return (
    <List
      direction="row"
      alignItems="center"
      gap="24px"
      items={links}
      renderItem={(link) => (
        <Link href={link.href} _hover={{ textDecoration: 'none' }} pos="relative">
          <Text
            key={`${link.href}${link.label}`}
            p="8px 16px"
            cursor="pointer"
            fontWeight={currentType === link.href ? '700' : '500'}
          >
            {link.label}
          </Text>
          {currentType === link.href && (
            <ChakraMotion
              as="span"
              layout
              layoutId="underline"
              style={{ originY: '0px' }}
              pos="absolute"
              bottom="0"
              left="0"
              w="100%"
              h="2px"
              bg="teal.600"
              borderRadius="2px"
            />
          )}
        </Link>
      )}
    />
  )
}

export default TabList
