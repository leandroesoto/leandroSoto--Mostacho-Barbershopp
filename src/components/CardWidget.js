import React from 'react'
import { Link } from "react-router-dom"
import { useCartContext } from '../context/CartContext'


const CardWidget  = () => {

  const {cart} = useCartContext()
  console.log(cart.length)

  return (

    <li className="nav-item">
        <Link to={`/cart`} className="nav-link">
            <i className="fas fa-shopping-cart"></i>
            <span className="badge badge-warning navbar-badge">{cart.length}</span>
        </Link>
    </li>
  )
}

export default CardWidget 