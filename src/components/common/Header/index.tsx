import { Box, Flex } from '@chakra-ui/react'
import Link from 'next/link'

import TabList from './TabList'
import ThemeSwitcher from './ThemeSwitcher'
import BlurImage from '../BlurImage'

const links = [
  { href: '/', label: 'Home' },
  { href: '/posts', label: 'Posts' },
  { href: '/log', label: 'Log' },
]

const Header = () => {
  return (
    <Box as="header" pos="fixed" top="0" w="100%" zIndex="10" bg="inherit">
      <Flex
        as="nav"
        justify="space-between"
        align="center"
        maxW="750px"
        h="64px"
        p={{
          base: '8px 16px',
          md: '8px 24px',
        }}
        m="0 auto"
      >
        <Link href="/">
          <Box
            overflow="hidden"
            cursor="pointer"
            display={{
              base: 'none',
              sm: 'block',
            }}
            pos="relative"
            w="32px"
            h="32px"
            borderRadius="50%"
          >
            <BlurImage
              src="https://avatars.githubusercontent.com/u/23312485?v=4"
              alt="kangjuhyeok"
              style={{
                objectFit: 'cover',
              }}
              fill
              priority
            />
          </Box>
        </Link>
        <TabList links={links} />
        <ThemeSwitcher />
      </Flex>
    </Box>
  )
}

export default Header
