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
        <div class="btn-group">
            <button type="button" onClick={subtract} class="btn btn-default btn-sm"><i class="fas fa-minus"></i></button>
            <button type="button" class="btn btn-default btn-sm">{contador}</button>
            <button type="button" onClick={add} class="btn btn-default btn-sm"><i class="fas fa-plus"></i></button>
        </div>
        <button onClick={()=>onAdd(contador)} className="btn btn-outline-success btn-sm ml-2">
          Comprar
        </button>

        </>
    )
}
export default ItemCount