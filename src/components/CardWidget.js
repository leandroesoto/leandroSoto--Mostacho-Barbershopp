import React from 'react'
import { Link } from "react-router-dom"
import { useCartContext } from '../context/CartContext'


const CardWidget  = () => {

  const {cantInCart} = useCartContext()

  return (

    <li className="nav-item">
        <Link to={`/cart`} className="nav-link">
            <i className="fas fa-shopping-cart"></i>
            <span className="badge badge-warning navbar-badge">{cantInCart()}</span>
        </Link>
    </li>
  )
}

export default CardWidget 