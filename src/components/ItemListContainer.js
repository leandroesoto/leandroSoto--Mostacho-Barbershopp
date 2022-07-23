import React from 'react'
import Item from './Item'


const ItemListContainer = ({greeting}) => {

  return (
    <div className="content">
      <div className="container">
        <h5>{greeting}</h5>
        <div className="row d-flex justify-content-between">
          <div className="col-lg-6">
            <div className="card">
              <Item/>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
} 
export default ItemListContainer
