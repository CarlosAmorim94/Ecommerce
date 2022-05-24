import { createContext, ReactNode, useEffect, useState } from 'react'
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

  

    /* if (cartItems.length === 0) {
      setCartItems([product])
    } else {
      setCartItems([...cartItems, product])
    } */

    useEffect(() => {
      console.log(cartItems);
    }, [cartItems]);
    const addProducts = (product: Product) => {
        setCartItems([...cartItems, product]);
    }
 

  return (
    <CartContext.Provider value={{ cartItems, addProducts }}>
      {children}
    </CartContext.Provider>
  )
}