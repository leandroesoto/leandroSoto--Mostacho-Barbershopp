import React from 'react'
import Item from './Item'
import Header from './Header'


const ItemListContainer = ({greeting}) => {

  return (
    <>
    <Header titulo={greeting}/>
    <div className="content">
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-lg-6">
            <div className="card">
              <Item/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
} 
export default ItemListContainer
