import React from 'react'


type ListProps<T> = {
    items: T[],
    handleClick: (item: T) => void,
    renderItem?: (item: T) => React.ReactNode
}
const List =  <T extends {}>({items, handleClick, renderItem,}: ListProps<T>) => {
  return (
    <div>
        {items.map((item, index) => {
            return <div key={index} onClick={() => handleClick(item)}>{renderItem ? renderItem(item): String(item)}</div>
        })}
    </div>

  )
}

export default List