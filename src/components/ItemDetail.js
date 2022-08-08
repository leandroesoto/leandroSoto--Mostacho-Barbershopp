import React from 'react'
import ItemCount  from './ItemCount'
import { useState } from 'react'
import { Link } from "react-router-dom"
import { useCartContext } from '../context/CartContext'



const ItemDetail = ({item}) => {

    const [goCart, setGoCart] = useState(false)
    const {addItem} = useCartContext()
    const [cantidad, setcantidad] = useState(0)

    const onAdd = (quantity) => {
        setGoCart(true)
        setcantidad(quantity)
        addItem(item, quantity)
    }


  return (
    <>
    <div className='row'>
        <div className="card card-solid ">
            <div className="card-body">
                <div className="row">
                    <div className="col-12 col-sm-5">
                        <h3 className="d-inline-block d-sm-none">{item.title}</h3>
                        <div className="col-12" >
                            <img src={item.pictureURL} className="product-image" alt="Product Image0"/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-7">
                        <h3 className="my-3">{item.title}</h3>
                        <p>{item.description}</p>
                        <hr/>
                        <div className='row'>
                            <div className='col-12 col-sm-6'>
                                <h3 className="mt-4 text-center">
                                    <div className="Text-info">
                                        ${item.price}
                                    </div>
                                </h3>
                                <h5 className="mt-4 text-center">
                                    <div className="Text-info">
                                        Disponibles: {item.stock}
                                    </div>
                                </h5>

                                <div className="mt-4 text-center">
                                { goCart ?
                                    <div>
                                        <p className="tex-muted text-center">Selecciono: {cantidad} unidades</p>
                                        <Link to={`/cart`} className="btn btn-primary mt-2">Finalizar Compra</Link>
                                    </div>
                                    : 
                                    <div className='mt-3'>
                                        <ItemCount initial={1} stock={item.stock} onAdd={onAdd}/>
                                    </div>
                                    }
                                </div>
                                
                            </div>
                            <div className='col-12 col-sm-6'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <p className="tex-muted text-center">Contactanos</p>
                                        <div className="mt-4 product-share text-center">
                                            <a href="/#" className="text-gray">
                                            <i className="fab fa-facebook-square fa-2x"></i>
                                            </a>
                                            <a href="/#" className="text-gray">
                                            <i className="fab fa-twitter-square fa-2x"></i>
                                            </a>
                                            <a href="/#" className="text-gray">
                                            <i className="fas fa-envelope-square fa-2x"></i>
                                            </a>
                                            <a href="/#" className="text-gray">
                                            <i className="fas fa-rss-square fa-2x"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ItemDetail