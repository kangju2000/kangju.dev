import type { ComponentSingleStyleConfig } from '@chakra-ui/react'

const UlLiStyle = ({ repeatCount }: { repeatCount: number }) => {
  const listStyleTypes = ['disc', 'circle', 'square']

  const style: { [key: string]: ComponentSingleStyleConfig['baseStyle'] } = {
    'ul > li::marker': {
      color: 'teal.600',
    },
  }

  Array.from({ length: repeatCount }).forEach((_, i) => {
    style[`ul > li ${'> ul > li'.repeat(i)}`] = {
      listStyleType: listStyleTypes[i % listStyleTypes.length],
    }
  })

  return style
}

const proseOverrides: ComponentSingleStyleConfig = {
  baseStyle: {
    ...UlLiStyle({ repeatCount: 6 }),
    h2: {
      position: 'relative',
      fontSize: { base: '2xl', md: '3xl' },
      scrollMarginTop: '64px',
      _hover: {
        _before: {
          content: '"🔗"',
          position: 'absolute',
          left: '-16px',
          bottom: '6px',
          fontSize: '14px',
        },
      },
    },
    h3: {
      position: 'relative',
      fontSize: { base: 'xl', md: '2xl' },
      scrollMarginTop: '64px',
      _hover: {
        _before: {
          content: '"🔗"',
          position: 'absolute',
          left: '-16px',
          bottom: '6px',
          fontSize: '14px',
        },
      },
    },
    h4: {
      fontSize: { base: 'lg', md: 'xl' },
      scrollMarginTop: '64px',
    },
    p: {
      fontSize: { base: 'sm', md: 'md' },
    },
    li: {
      fontSize: { base: 'sm', md: 'md' },
    },
    'ol > li': {
      listStyleType: 'decimal',
    },
    'ol > li::marker': {
      color: 'teal.600',
    },
    'ol > li > ol > li': {
      listStyleType: 'lower-alpha',
    },
    a: {
      color: 'teal.500',
      outline: 'none !important',
      boxShadow: 'none !important',
      _hover: {
        textDecoration: 'underline',
      },
    },
    blockQuote: {
      fontStyle: 'inherit',
      color: 'gray.500',
    },
  },
}

export default proseOverrides
