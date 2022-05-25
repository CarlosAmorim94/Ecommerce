import { Product } from "../../types/Products"
import { Container, ImageStyled } from "./styles"
import Image from "next/image";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { BsTrash } from 'react-icons/bs'


type Props = {
  item: Product
}

export const CartItem = ({ item }: Props) => {

  const cart = useContext(CartContext)
  
  return (
    <Container>
      <ImageStyled>
            <Image
              src={item.image}
              alt={item.title}
              width={100}
              height={100}
              layout="raw"
            />
        </ImageStyled>
        {item.title}
        {item.price}
        <button onClick={() => (cart?.removeProducts(item))}><BsTrash /></button>
    </Container>
  )
}