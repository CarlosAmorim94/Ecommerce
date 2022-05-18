import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'
import { Product } from '../../types/Products'

type CartItemsType = {
  cartItems: Product[];
  addProducts: () => void;
}

type Props = {
  children: ReactNode
};

export const CartContext = createContext<CartItemsType | null>(null)

export const CartProvider= ( {children}: Props ) => {

  const [cartItems, setCartItems] = useState<Product[]>([])

  const addProducts = (product: Product) => {

    let products: Product[] = []
    products.push(product)
    setCartItems(products)

    console.log(cartItems)
  }

  return (
    <CartContext.Provider value={{ cartItems, addProducts }}>
      {children}
    </CartContext.Provider>
  )
}