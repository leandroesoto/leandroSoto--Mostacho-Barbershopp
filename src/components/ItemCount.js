import React from 'react'
import { useState } from 'react'

const ItemCount = ({stock, initial, onAdd}) => {

        const [contador, setContador] = useState(initial)

        const add = () => {
            if(contador < stock){
                setContador(contador + 1)
            }
        }

        const subtract = () => {
            if(contador > 0 ){
                setContador(contador - 1)
            } 
        }

    return (
        <>
        <div className="btn-group">
            <button type="button" onClick={subtract} className="btn btn-default btn-sm"><i className="fas fa-minus"></i></button>
            <button type="button" className="btn btn-default btn-sm">{contador}</button>
            <button type="button" onClick={add} className="btn btn-default btn-sm"><i className="fas fa-plus"></i></button>
        </div>
        <button onClick={()=>onAdd(contador)} className="btn btn-outline-success btn-sm ml-2">
          Comprar
        </button>

        </>
    )
}
export default ItemCount