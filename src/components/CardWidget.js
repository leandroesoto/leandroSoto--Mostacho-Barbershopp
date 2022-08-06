import React from 'react'
import { Link } from "react-router-dom"

const CardWidget  = () => {

  return (

    <li className="nav-item">
        <Link to={`/cart`} className="nav-link">
            <i className="fas fa-shopping-cart"></i>
            <span className="badge badge-warning navbar-badge">1</span>
        </Link>
    </li>
  )
}

export default CardWidget 