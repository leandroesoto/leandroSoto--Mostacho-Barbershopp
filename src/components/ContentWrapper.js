import React from 'react'
import ItemListContainer from './ItemListContainer'

const ContentWrapper = () => {
  return (
    <div className="content-wrapper">
        <ItemListContainer
        greeting='Bienvenidos a nuestra tienda'
        />
    </div>
  )
}

export default ContentWrapper