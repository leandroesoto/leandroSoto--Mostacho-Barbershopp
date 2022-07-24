import React from 'react'
import Item from './Item'

const ItemList = ({items}) => {
    console.log(items)
  return (
     <div className="row justify-content-between">
        {Object.entries(items).map((item) => (<Item key={item[0]} item={item[1]}/>))}
     </div>
  )
}

export default ItemList