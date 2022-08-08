import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const clear = () => setCart([])

    const isInCart = (id) => cart.find(producto => producto.id === id) ? true : false

    const removeItem = (id) => setCart(cart.filter(producto => producto.id !== id))

    const addItem = (item, quantity) => {
        let newCart
        let producto = cart.find(prod => prod.id === item.id)
        if (producto) {
            producto.quantity += quantity
            newCart = [...cart]
        } else {
            producto = {...item, quantity: quantity}
            newCart = [...cart, producto]
        }
        setCart(newCart)
    }
    console.log('productos en carrito', cart)

  return (
    <CartContext.Provider value={{clear, isInCart, removeItem, addItem, cart}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider