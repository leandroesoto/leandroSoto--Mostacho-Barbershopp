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

    const cantInCart = () => {
        return cart.reduce((acc, prod) => (acc += prod.quantity), 0);
      };

    const totalPrice = () => {
        return cart.reduce((acc, prod) => (acc += prod.price * prod.quantity), 0);
      };

    const cartfunct = {
        cart,
        clear,
        addItem,
        removeItem,
        cantInCart,
        totalPrice,
        isInCart,
      };

  return (
    <CartContext.Provider value={cartfunct}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider