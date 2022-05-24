import { createContext, ReactNode, useState } from 'react'
import { Product } from '../../types/Products'

type CartItemsType = {
  cartItems: Product[];
  addProducts: (product: Product) => void;
}

type Props = {
  children: ReactNode
};

export const CartContext = createContext<CartItemsType | null>(null)

export const CartProvider= ( {children}: Props ) => {

  const [cartItems, setCartItems] = useState<Product[]>([])

  const addProducts = (product: Product) => {

    setCartItems([...cartItems, product])
    
    console.log(cartItems)

  }

  return (
    <CartContext.Provider value={{ cartItems, addProducts }}>
      {children}
    </CartContext.Provider>
  )
}