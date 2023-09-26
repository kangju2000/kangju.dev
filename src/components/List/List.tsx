import { ChakraProps, Flex } from '@chakra-ui/react'
import { Fragment } from 'react'

interface ListProps<T> extends ChakraProps {
  items: T[]
  renderItem: (item: T) => React.ReactNode
  renderEmpty?: () => React.ReactNode
  direction?: 'row' | 'column'
  gap?: string
}

const List = <T,>({
  items,
  renderItem,
  renderEmpty,
  direction = 'column',
  gap = '32px',
  ...props
}: ListProps<T>) => {
  if (items.length > 0) {
    return (
      <Flex as="ul" direction={direction} gap={gap} {...props}>
        {items.map((item, index) => (
          <Fragment key={index}>{renderItem(item)}</Fragment>
        ))}
      </Flex>
    )
  }

  return renderEmpty?.()
}

export default List
