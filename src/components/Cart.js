import React from 'react'
import Header from './Header'
import { useCartContext } from '../context/CartContext'
import { Link } from "react-router-dom"



const Cart = () => {

  const {cart} = useCartContext()
  const {totalPrice} = useCartContext()
  const {removeItem} = useCartContext()


  return (
    <>
    <Header titulo = ''/>
    <div className="container">
      <div className='row'>
        <div className='col-md-12'>
          <div className="card card-solid ">
              <div className="card-header">
                  <div>Productos en tu Carrito</div>
              </div>
              <div className="card-body">
                 <div className="row">
                    <div className="col-12 table-responsive text-center">

                    { cart.length > 0 ? 

                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th>Item</th>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Subtotal</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                        {cart.map((item, index) => (
                          <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.title}</td>
                            <td>{item.quantity}</td>
                            <td>$ {item.price * item.quantity}</td>
                            <td style={{width:  '3%'}}><span className='btn btn-sm text-danger' onClick={()=>removeItem(item.id)}><i className="fas fa-trash"></i></span></td>
                          </tr>
                        ))}
                          <tr>
                            <td></td>
                            <td></td>
                            <th>Total</th>
                            <th>$ {totalPrice()}</th>
                          </tr>
                        
                        </tbody>
                      </table>
                    : 'no hay productos en tu carrito'}
                    </div>
                  </div>
              </div>
              <div className='card-footer'>
              { cart.length > 0 ? <> <Link to={`/`} className="btn btn-info float-left">Agregar otro Pruducto</Link> <button className='btn btn-success float-right'>Finalizar Compra</button></> : <Link to={`/`} className="btn btn-info float-right">Seleccionar Producto</Link>}
              </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cart