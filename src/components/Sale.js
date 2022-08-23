import React, { useState } from 'react'
import {collection, addDoc, serverTimestamp, getFirestore} from 'firebase/firestore'
import { useCartContext } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'




const Sale = () => {
    const navegar = useNavigate()
    const [comprador, setComprador]= useState({})
    const [orderId, setOrderId]= useState('')
    const {cart, totalPrice, clear}= useCartContext()
    const [cargando, setCargando] = useState(false)
    const [mailConf, setMailConf] = useState()
    const [alerta, setAlerta] = useState('')

    const db = getFirestore();

    const datosConf = (e) => {
        setMailConf({
            ...mailConf,
            [e.target.name]: e.target.value
        })
    }


    const datosComprador = (e) => {
        setComprador({
            ...comprador,
            [e.target.name]: e.target.value
        })
    }

    const finalizarCompra = (e) =>{
        e.preventDefault()
        console.log(Object.values(comprador))
        console.log()


       if(Object.values(comprador).length !== 3 ){
            setAlerta('todos los campos son obligatorios')
       }else if(comprador.email !== mailConf.emailConf){
            setAlerta('los mails no son iguales')
       }else{
        setCargando(true);
        const ventasCollection = collection(db, "ventas")
        addDoc(ventasCollection,{
            comprador,
            items: cart,
            total:totalPrice(),
            date: serverTimestamp()
        })
        .then((res)=>{
            setOrderId(res.id)
            clear()
        })
        .catch((error)=> console.log(error))
        .finally(() => {setCargando(false);});
       }
    }

  return (
   <>
   <div className="container">

    <div className='overlay-wrapper'>
    { cargando ? <div className="overlay"><i className="fas fa-3x fa-sync-alt fa-spin"></i><span className="text-muted ml-2"> Cargando...</span></div> : ''}

   <div className='row d-flex justify-content-center'>
    <div className='col-md-6'>
        <div className="card card-primary mt-3">
                <div className="card-header">
                    <h3 className="card-title">Formulario de compra</h3>
                </div>

        {!orderId 
            ?
                <form onSubmit={finalizarCompra}>
                <div className="card-body">
                    <div className="form-group">
                        <label>Nombre completo</label>
                        <input type="text" className="form-control"  required placeholder='Nombre Completo' name='nombre'onChange={datosComprador} />
                    </div>
                    <div className="form-group">
                        <label >Telefono</label>
                        <input type="number" className="form-control"  required placeholder="11-998-666" name='telefono'onChange={datosComprador}/>
                    </div>
                    <div className="form-group">
                        <label >Email</label>
                        <input type="email" className="form-control" required placeholder="example@mail.com" name='email' onChange={datosComprador}/>
                    </div>
                    <div className="form-group">
                        <label >Confirmar Email</label>
                        <input type="email" className="form-control"  required placeholder="example@mail.com" name="emailConf" onChange={datosConf} />
                    </div>

                    {alerta && <span className='text-danger'>{alerta}</span>}
                    
                </div>

                <div className="card-footer">
                    <button type="submit" className="btn btn-primary">Finalizar compra</button>
                </div>
                </form>

            :

            <div className="card-body">
                <h2>Muchas gracias por su compra!</h2>
                <h3>Su orden es: {orderId}</h3>
                <button onClick={()=>navegar('/')} className='btn btn-success float-right'>Seguir comprando</button>
            </div>}

        </div>
     </div>
    </div>
   </div>
  </div>

   </>
  )
}

export default Sale