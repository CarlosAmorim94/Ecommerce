import { Product } from "../../types/Products"
import { Container, ImageStyled } from "./styles"
import Image from "next/image";

type Props = {
  item: Product
}

export const CartItem = ({ item }: Props) => {
  
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
    </Container>
  )
}