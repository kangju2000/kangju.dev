'use client'
import { Link } from '@chakra-ui/next-js'
import { chakra, Box, Center, Flex, useColorMode } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/posts', label: 'Posts' },
  { href: '/log', label: 'Log' },
]

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const pathname = usePathname()
  const currentType = `/${pathname.split('/')[1]}`

  return (
    <Box as="header" pos="sticky" top={0} zIndex={10}>
      <Flex
        as="nav"
        justify="space-between"
        align="center"
        maxW="700px"
        h="64px"
        p={{
          base: '8px 16px',
          md: '8px 24px',
        }}
        m="0 auto"
      >
        <Link
          href="/"
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
          <Image
            src="https://avatars.githubusercontent.com/u/23312485?v=4"
            alt="kangjuhyeok"
            fill
          />
        </Link>
        <Center as="ul" gap="24px">
          {links.map(({ href, label }) => (
            <chakra.li key={`${href}${label}`} pos="relative" p="8px 16px" cursor="pointer">
              <Link
                href={href}
                fontWeight="bold"
                color="gray.500"
                _hover={{ textDecoration: 'none' }}
              >
                {label}
              </Link>
              {currentType === href && (
                <chakra.span
                  as={motion.span}
                  pos="absolute"
                  bottom="0"
                  left="0"
                  w="100%"
                  h="1px"
                  bg="gray.500"
                  borderRadius="4px"
                  layoutId="underline"
                />
              )}
            </chakra.li>
          ))}
        </Center>
        <Center w="24px" h="24px" cursor="pointer" onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Center>
      </Flex>
    </Box>
  )
}

export default Header

const MoonIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20.995 11.711L21.995 11.68C21.9902 11.5271 21.9503 11.3774 21.8785 11.2423C21.8067 11.1072 21.7049 10.9904 21.5809 10.9009C21.4568 10.8114 21.3139 10.7515 21.1631 10.7258C21.0123 10.7002 20.8576 10.7095 20.711 10.753L20.995 11.711ZM12.288 3.005L13.248 3.289C13.2915 3.14228 13.3008 2.98752 13.2751 2.83664C13.2494 2.68577 13.1894 2.5428 13.0998 2.41876C13.0101 2.29472 12.8932 2.19291 12.758 2.12118C12.6228 2.04944 12.473 2.0097 12.32 2.005L12.288 3.005ZM20.711 10.753C20.1556 10.9175 19.5793 11.0007 19 11V13C19.7719 13.0006 20.5399 12.8894 21.28 12.67L20.71 10.753H20.711ZM19 11C17.4087 11 15.8826 10.3679 14.7574 9.24264C13.6321 8.11742 13 6.5913 13 5H11C11 7.12173 11.8429 9.15656 13.3431 10.6569C14.8434 12.1571 16.8783 13 19 13V11ZM13 5C13 4.404 13.087 3.83 13.247 3.29L11.33 2.72C11.1106 3.4601 10.9994 4.22806 11 5H13ZM12 4C12.086 4 12.172 4.001 12.257 4.004L12.32 2.005C12.2134 2.00166 12.1067 1.99999 12 2V4ZM4 12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4V2C6.477 2 2 6.477 2 12H4ZM12 20C9.87827 20 7.84344 19.1571 6.34315 17.6569C4.84285 16.1566 4 14.1217 4 12H2C2 17.523 6.477 22 12 22V20ZM20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20V22C17.523 22 22 17.523 22 12H20ZM19.996 11.743C19.999 11.828 20 11.914 20 12H22C22 11.893 21.998 11.786 21.995 11.68L19.996 11.743Z"
      fill="black"
    />
  </svg>
)

const SunIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
      stroke="white"
      stroke-width="2"
      stroke-linejoin="round"
    />
    <path
      d="M20 12H21M3 12H4M12 20V21M12 3V4M17.657 17.657L18.364 18.364M5.636 5.636L6.343 6.343M6.343 17.657L5.636 18.364M18.364 5.636L17.657 6.343"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
)