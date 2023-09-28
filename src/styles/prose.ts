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
      fontSize: '3xl',
    },
    h3: {
      fontSize: '2xl',
    },
    h4: {
      fontSize: 'xl',
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
    },
  },
}

export default proseOverrides
