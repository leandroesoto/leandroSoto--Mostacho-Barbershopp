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
        <div className='overlay-wrapper'>
            { cargando ? <div class="overlay"><i class="fas fa-3x fa-sync-alt fa-spin"></i><spam className="text-muted ml-2"> Cargando...</spam></div> : <ItemList items={listaProductos}/>}
            {alerta && <p>{alerta}</p>}
        </div>
      </div>
    </div>
    </>
  )
} 
export default ItemListContainer
