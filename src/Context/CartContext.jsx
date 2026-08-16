import React, {
  createContext,
  useContext,
  useState
} from 'react'

const CartContext = createContext(null)


export const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState([])


  // ADD TO CART
  const addToCart = (product) => {

    setCartItems((prevItems) => {

      const existingItem = prevItems.find(
        (item) => item.id === product.id
      )

      if (existingItem) {

        return prevItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        )
      }

      return [
        ...prevItems,
        {
          ...product,
          quantity: 1
        }
      ]

    })
  }


  // REMOVE
  const removeFromCart = (id) => {

    setCartItems((prevItems) =>
      prevItems.filter(
        (item) => item.id !== id
      )
    )

  }


  // INCREASE
  const increaseQuantity = (id) => {

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    )

  }


  // DECREASE
  const decreaseQuantity = (id) => {

    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1
              }
            : item
        )
        .filter(
          (item) => item.quantity > 0
        )
    )

  }


  // CLEAR CART
  const clearCart = () => {
    setCartItems([])
  }


  // CART COUNT
  const cartCount = cartItems.reduce(
    (total, item) =>
      total + item.quantity,
    0
  )


  // CART TOTAL
  const cartTotal = cartItems.reduce(
    (total, item) => {

      const price = Number(
        String(item.price)
          .replace('₹', '')
          .replace(',', '')
      )

      return total + price * item.quantity

    },
    0
  )


  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        cartCount,
        cartTotal
      }}
    >
      {children}
    </CartContext.Provider>
  )
}


export const useCart = () => {

  const context = useContext(CartContext)

  if (context === null) {
    throw new Error(
      'useCart must be used inside CartProvider'
    )
  }

  return context
}


export default CartContext