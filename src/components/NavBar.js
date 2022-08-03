import React from 'react'
import Mostacho from '../mostacho.jpg'
import CardWidget from './CardWidget'
import { Link } from "react-router-dom"

const NavBar = () => {

  return (
  <nav className="main-header navbar navbar-expand-md navbar-light navbar-olive">
    <div className="container">
        <div className="collapse navbar-collapse order-3" id="navbarCollapse">
            <Link to={`/`} className="navbar-brand">
                <img src={Mostacho} className="brand-image img-circle elevation-2" alt="mostacho barber shopp"/>
                <span className="brand-text font-weight-light">Mostacho</span>
            </Link>
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link to={`/`} className="nav-link">Inicio</Link>
                </li>
                <li className="nav-item">
                <Link to={`/Contacto`} className="nav-link">Contacto</Link>
                
                </li>
                <li className="nav-item dropdown">
                <a id="dropdownSubMenu1" href="/#" data-toggle="dropdown" aria-expanded="false" className="nav-link dropdown-toggle">Categorias</a>
                <ul aria-labelledby="dropdownSubMenu1" className="dropdown-menu border-0 shadow">
                    <li><Link to={`/category/Productos`}className="dropdown-item">Productos</Link></li>
                    <li><Link to={`/category/kits`} className="dropdown-item">kits</Link></li>
                    <li><Link to={`/`} className="dropdown-item">Todo</Link></li>
                </ul>
                </li>
            </ul>
        </div>
        <ul className="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">
            <CardWidget/>
        </ul>
    </div>
  </nav>
  )
}

export default NavBar