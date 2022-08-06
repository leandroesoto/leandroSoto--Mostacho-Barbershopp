import React from 'react'
import Header from './Header'


const Cart = () => {
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
                    <div className="col-12 table-responsive">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th>Item</th>
                            <th>Producto</th>
                            <th>Description</th>
                            <th>Cantidad</th>
                            <th>Subtotal</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Denominación</td>
                            <td>Detalle</td>
                            <td>3</td>
                            <td>$250</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
              </div>
              <div className='card-footer'>
                <button className='btn btn-success float-right'>Finalizar Compra</button>
              </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cart