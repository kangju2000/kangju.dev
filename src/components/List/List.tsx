import { type ComponentProps, Fragment } from 'react'

import ChakraMotion from '../ChakraMotion/ChakraMotion'

interface ListProps<T> extends ComponentProps<typeof ChakraMotion> {
  items: T[]
  renderItem: (item: T, index: number) => React.ReactNode
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
      <ChakraMotion as="ul" display="flex" flexDirection={direction} gap={gap} {...props}>
        {items.map((item, index) => (
          <Fragment key={index}>{renderItem(item, index)}</Fragment>
        ))}
      </ChakraMotion>
    )
  }

  return renderEmpty?.()
}

export default List
