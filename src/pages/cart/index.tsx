import { useContext } from "react"
import { CartItem } from "../../components/CartItem";
import { CartContext } from "../../contexts/CartContext"
import { Container, UlList } from "./styles"

export const Cart = () => {

   const cart = useContext(CartContext)

   const totalValue = () => {

   }

  return (
    <Container>
      
    <div>
      <h1>MEU CARRINHO DE COMPRAS</h1>
      <button>limpar lista</button>
      <div>Total:</div>
    </div>
    
    <UlList>
      {cart?.cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </UlList>
    </Container>
        
  )
}

export default Cart