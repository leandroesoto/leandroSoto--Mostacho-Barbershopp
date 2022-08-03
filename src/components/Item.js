import React from 'react'
import { Link } from "react-router-dom";

const Item = ({item}) => {

  return (
    <>
    <div className="col-lg-3 col-6">
      <div className="card">
        <div className="card-header">
          <h5 className="card-title"> {item.title}</h5>
          <span className="text-muted float-right">{}</span>
        </div>
        <div className="card-body">
          <div className='text-center'>
            <img src={item.pictureURL} className="img-fluid" alt={item.title} style={{height: 250}}/>
          </div>
          <div>
            <p className="card-text mt-2" style={{height: 150, overflowY: 'auto',}} >
              {item.description}
            </p>
            <Link to={`/item/${item.id}`} className='btn btn-info btn-sm flo'>Ver Detalle del Producto</Link>
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