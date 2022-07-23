import React from 'react'
import ItemCount  from './ItemCount'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const Item = () => {

    const MySwal = withReactContent(Swal)

    const onAdd = (cantidad) => {
        MySwal.fire({
            title: `Agregaste ${cantidad} items en el carrito`,
            icon: 'success',
            showConfirmButton: false,
            timer: 1500

        })
    }



  return (
    <>
      <div className="card">
        <div className="card-header">
          <h5 className="card-title">Producto 1</h5>
          <span className="text-muted float-right">Disponibles: 5</span>
        </div>
        <div className="card-body">
          <p className="card-text">
            Descripción.
          </p>
          <ItemCount initial={1} stock={5} onAdd={onAdd}/>
        </div>
      </div>
    </>
  )
}

export default Item