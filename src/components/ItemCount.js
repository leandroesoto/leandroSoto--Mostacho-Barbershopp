import React from 'react'
import {useState} from 'react'

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
    <div> ItemCount </div>
  )
}

export default ItemCount