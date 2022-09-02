import React from 'react'
import Header from './Header'
import {productos_data} from '../moks/data-api'
import ItemList from './ItemList'
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';

import {
	collection,
	getFirestore,
	getDocs,
	query,
	where,
} from 'firebase/firestore';

const ItemListContainer = ({greeting}) => {
  const { category } = useParams();
  const [listaProductos, setListaProductos]= useState([])
  const[alerta, setAlerta] = useState(false)
  const [cargando, setCargando] = useState(true)

  
  // useEffect(() => {
  //   productos_data
  //       .then((res) => {
  //           if (category) {
  //             setListaProductos(res.filter((product) => product.category === category));
  //           } else {
  //             setListaProductos(res);
  //           }
  //       })
  //       .catch((err) => setAlerta('lo sentimos hubo un error'))
  //       .finally(()=> setCargando(false))
  // }, [category]);



  useEffect(() => {
		const db = getFirestore();

		const porductsCollection = collection(db, 'items');

		if (category) {
			getDocs(query(porductsCollection, where('category', '==', category)))
				.then((snapshot) => {
					setListaProductos(
						snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
					);
				})
				.catch((error) => {
					console.log(error);
				})
				.finally(() => {
					setCargando(false);
				});
		} else {
			getDocs(porductsCollection)
				.then((snapshot) => {
					setListaProductos(
						snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
					);
				})
				.catch((error) => {
					console.log(error);
				})
				.finally(() => {
					setCargando(false);
				});
		}
	
		
	}, [category]);




  
  return (
    <>
    <Header titulo={greeting}/>
    <div className="content">
      <div className="container">
        <div className='overlay-wrapper'>
            { cargando ? <div className="overlay"><i className="fas fa-3x fa-sync-alt fa-spin"></i><span className="text-muted ml-2"> Cargando...</span></div> : <ItemList items={listaProductos}/>}
            {alerta && <p>{alerta}</p>}
        </div>
      </div>
    </div>
    </>
  )
} 
export default ItemListContainer
