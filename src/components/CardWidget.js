import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Link } from "react-router-dom"


const CardWidget  = () => {

    // const MySwal = withReactContent(Swal)
    // const cartAlert = () => {
    //     MySwal.fire({
    //         title: <p>En desarrollo</p>,
    //         icon: "warning",
    //         button: "Aceptar",
    //         timer: "2000"
    //     })
    // }

  return (

    <li className="nav-item">
        <Link to={`/cart`} className="nav-link">
            <i className="fas fa-shopping-cart"></i>
            <span className="badge badge-warning navbar-badge">5</span>
        </Link>
        {/* <a className="nav-link" href="/#" onClick={()=>cartAlert()}>
        </a> */}
    </li>


  )
}

export default CardWidget 