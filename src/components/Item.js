import React from 'react'
import ItemCount  from './ItemCount'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Link } from "react-router-dom";


const Item = ({item}) => {

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
    <div className="col-lg-3 col-6">
      <div className="card">
        <div className="card-header">
          <h5 className="card-title">{item.category}</h5>
          <h5 className="card-title"> {item.title}</h5>
          <span className="text-muted float-right">{}</span>
        </div>
        <div className="card-body">
          <img src={item.pictureURL} className="img-fluid" alt={item.title} />
          <div>
            <p className="card-text mt-2" style={{height: 150, overflowY: 'auto',}} >
              {item.description}
            </p>
            {/* <button className='btn btn-info btn-sm flo'>Ver Detalle del Producto</button> */}
            <Link to={`/item/${item.id}`} className='btn btn-info btn-sm flo'>Ver Detalle del Producto</Link>
          </div>
          <div className='mt-3'>
            <ItemCount initial={1} stock={item.stock} onAdd={onAdd}/>
          </div>
        </div>
        <div className="card-footer ">
          <p className="card-text float-center">
            Disponibles: {item.stock}
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Item