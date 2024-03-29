import React from 'react'
import ItemDetail from './ItemDetail'
import Header from './Header'
import { useEffect, useState } from "react"
import {getItem} from '../moks/data-api'
import {useParams} from "react-router-dom";
import { doc, getDoc, getFirestore } from 'firebase/firestore';


const ItemDetailContainer = ({greeting}) => {

    const {id} = useParams();
    const [Producto, setProducto]= useState([])
    const[alerta, setAlerta] = useState(false)
    const [cargando, setCargando] = useState(true)
  


    useEffect(() => {
      const db = getFirestore();
  
      const productRef = doc(db, 'items', id);
  
      getDoc(productRef)
        .then((snapshot) => {
          setProducto({ ...snapshot.data(), id: snapshot.id });
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setCargando(false);
        });
    }, [id]);
    


  return (
    <>
    <Header titulo={greeting}/>
    <div className="container">
        <div className='overlay-wrapper'>
            { cargando ? <div className="overlay"><i className="fas fa-3x fa-sync-alt fa-spin"></i><span className="text-muted ml-2"> Cargando...</span></div> : <ItemDetail item={Producto}/>}
            {alerta && <p>{alerta}</p>}
        </div>
    </div>
    </>
  )
}
export default ItemDetailContainer