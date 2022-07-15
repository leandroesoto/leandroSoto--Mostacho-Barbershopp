import React from 'react'
import Mostacho from '../mostacho.jpg'

const NavBar = () => {
  return (
  <nav className="main-header navbar navbar-expand-md navbar-light navbar-olive">
    <div className="container">
        <div className="collapse navbar-collapse order-3" id="navbarCollapse">
            <a href="/#" class="navbar-brand">
                <img src={Mostacho} className="brand-image img-circle elevation-2"/>
                <span class="brand-text font-weight-light">Mostacho</span>
            </a>
            <ul className="navbar-nav">
                <li className="nav-item">
                <a href="index.html" className="nav-link">Inicio</a>
                </li>
                <li className="nav-item">
                <a href="/#" className="nav-link">Contacto</a>
                </li>
                <li className="nav-item dropdown">
                <a id="dropdownSubMenu1" href="/#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle">Categorias</a>
                <ul aria-labelledby="dropdownSubMenu1" className="dropdown-menu border-0 shadow">
                    <li><a href="/#" className="dropdown-item">Categoria 1 </a></li>
                    <li><a href="/#" className="dropdown-item">Categoria 2</a></li>
                    <li className="dropdown-divider"></li>
                    <li className="dropdown-submenu dropdown-hover">
                    <a id="dropdownSubMenu2" href="/#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-item dropdown-toggle">Categoria 3</a>
                    <ul aria-labelledby="dropdownSubMenu2" className="dropdown-menu border-0 shadow">
                        <li>
                        <a tabindex="-1" href="/#" className="dropdown-item">Subcategoria 1</a>
                        </li>
                        <li><a href="/#" className="dropdown-item">Subcategoria 2</a></li>
                    </ul>
                    </li>
                </ul>
                </li>
            </ul>
        </div>
        <ul className="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">
            <li className="nav-item dropdown">
                <a className="nav-link" href="/#">
                    <i class="fas fa-shopping-cart"></i>
                    <span className="badge badge-warning navbar-badge">4</span>
                </a>
            </li>
        </ul>
    </div>
  </nav>
  )
}

export default NavBar