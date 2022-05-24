import { createContext, ReactNode, useEffect, useState } from 'react'
import { Product } from '../../types/Products'

type CartItemsType = {
  cartItems: Product[];
  addProducts: (product: Product) => void;
  removeProducts: (product: Product) => void;
  clearCart: () => void;
}

type Props = {
  children: ReactNode
};

export const CartContext = createContext<CartItemsType | null>(null)

export const CartProvider= ( {children}: Props ) => {

  const [cartItems, setCartItems] = useState<Product[]>([])

  const addProducts = (product: Product) => {
    setCartItems([...cartItems, product])
  }

  const removeProducts = (product: Product) => {
    const filteredProducts = cartItems.filter(
      (item) => item.id !== product.id
    )

    setCartItems(filteredProducts)
  }

  const clearCart = () => {
    setCartItems([])
  }
 

  return (
    <CartContext.Provider value={{ cartItems, addProducts, removeProducts, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}