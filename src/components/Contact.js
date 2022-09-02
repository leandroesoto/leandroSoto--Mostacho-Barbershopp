import React from 'react'
import Header from './Header'
import { FaGithub } from 'react-icons/fa';


const Contact = () => {
  return (
    <>
    <Header titulo={''}/>
    <div className="container">
      <div className='row d-flex justify-content-center'>
        <div className='col-md-6'>
            <div className="card bg-light d-flex flex-fill">
        <div className="card-header text-muted border-bottom-0">
          Información de contacto
        </div>
        <div className="card-body pt-0">
        <div className="row">
        <div className="col-7">
        <h2 className="lead"><b>Leandro Soto</b></h2>
        <p className="text-muted text-sm">Modelo de E-comerce desarrollado para el curso de React.Js  de la plataforma Coderhouse</p>

        </div>
        <div className="col-5 text-center">
        <img src="../../dist/img/leandro.jpg" alt="user-avatar" className="img-circle img-fluid"/>
        </div>
        </div>
        </div>
          <div className="card-footer">
            <div className="float-rigth">
              <span><FaGithub size={40}/></span> &nbsp;
              <a href="https://github.com/leandroesoto" className="text-muted">
                 visita mi perfil en github
              </a>
            </div>
          </div>
        </div>
            </div>
        </div>






    {/* <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
        </div> */}
    </div>
    </>
  )
}

export default Contact