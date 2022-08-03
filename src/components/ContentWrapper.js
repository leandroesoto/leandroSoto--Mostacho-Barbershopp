import React from 'react'
import { Routes, Route} from "react-router-dom";
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'
import Cart from './Cart'
import Contact from './Contact'


const ContentWrapper = () => {
  return (
    <div className="content-wrapper">
      <Routes>
        <Route path="/" element={<ItemListContainer greeting='Bienvenidos a nuestra tienda'/>} />
        <Route path="/category/:category" element={<ItemListContainer greeting='Listado por categoria'/>} />
        <Route path="/item/:productoId" element={<ItemDetailContainer greeting='Detallle del producto'/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/contacto" element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default ContentWrapper