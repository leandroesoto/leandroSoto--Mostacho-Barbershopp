import React from 'react'
import Header from './Header'
import {productos_data} from '../moks/data-api'
import ItemList from './ItemList'
import { useEffect, useState } from "react"

const ItemListContainer = ({greeting}) => {
  const [listaProductos, setListaProductos]= useState([])
  const[alerta, setAlerta] = useState(false)
  const [cargando, setCargando] = useState(true)

  useEffect(()=>{
    console.log('soy el useEffect')
    productos_data
    .then((res)=> setListaProductos(res))
    .catch(()=> setAlerta('hubo un error, intente mas tarde'))
    .finally(()=> setCargando(false))
  }, [])




  return (
    <>
    <Header titulo={greeting}/>
    <div className="content">
      <div className="container">
        {alerta && <p>{alerta}</p>}
        { cargando ? <p>Cargando...</p> : <ItemList items={listaProductos}/>}
      </div>
    </div>
    </>
  )
} 
export default ItemListContainer
