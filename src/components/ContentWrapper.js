import React from 'react'
import { Routes, Route} from "react-router-dom";
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer';


const ContentWrapper = () => {
  return (
    <div className="content-wrapper">
      <Routes>
        <Route path="/" element={<ItemListContainer greeting='Bienvenidos a nuestra tienda'/>} />
        <Route path="/item/:productoId" element={<ItemDetailContainer greeting='Detallle del producto'/>} />
      </Routes>
    </div>
  )
}

export default ContentWrapper