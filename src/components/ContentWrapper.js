import React from 'react'
import Header from './Header'
import ItemListContainer from './ItemListContainer'

const ContentWrapper = () => {
  return (
    <div className="content-wrapper">
        <Header/>
        <ItemListContainer/>
    </div>
  )
}

export default ContentWrapper