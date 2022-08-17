import React from 'react'
import Item from './Item'

const ItemList = ({items}) => {
  return (
     <div className="row ">
         {console.log(items)}
        {Object.entries(items).map((item) => (<Item key={item[0]} item={item[1]}/>))}
     </div>
  )
}

export default ItemList