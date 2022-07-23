import React from 'react'

const Item = () => {

  return (
    <>
      <div className="card-header">
        <h5 className="card-title">Producto 1</h5>
        <span className="text-muted float-right">Disponibles: 5</span>
      </div>
      <div className="card-body">
        <p className="card-text">
          Descripción.
        </p>
        <button className="btn btn-outline-success btn-sm float-right">
          Agregar al carrito 
        </button>
      </div>
    </>
  )
}

export default Item