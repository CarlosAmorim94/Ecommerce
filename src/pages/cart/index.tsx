import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { UlList } from "./styles"

export const Cart = () => {

   const cart = useContext(CartContext)

  return (
  
    <UlList>
      {cart?.cartItems.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </UlList>
    
  )
}

export default Cart