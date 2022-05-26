import { useContext } from "react"
import { CartItem } from "../../components/CartItem";
import { CartContext } from "../../contexts/CartContext"
import { Container, ResumeHead, UlList, ValueTotal } from "./styles"
import { Product } from "../../types/Products"
import { toRealBRFormat } from "../../helpers/ValuesFormat";
import { BsTrash } from 'react-icons/bs'

export const Cart = () => {

   const cart = useContext(CartContext)

        
    const totalValue = cart?.cartItems.reduce( (initial: number, item: Product) => (
      initial + item.price
    ), 0 )


  return (
    <Container>
      
    <ResumeHead>
      <h1>MEU CARRINHO DE COMPRAS</h1>
      <button onClick={cart?.clearCart}>
        <BsTrash className="trash" />
        <p>limpar tudo</p>
      </button>
      <ValueTotal>Total: <span>{toRealBRFormat(totalValue)}</span></ValueTotal>
    </ResumeHead>
    
    <UlList>
      {cart?.cartItems.map((item, key) => (
        <CartItem key={key} item={item} />
      ))}
    </UlList>
    </Container>
        
  )
}

export default Cart