import { Product } from "../../types/Products"
import { Container, Description, Details, ImageStyled, Title, Value, Values } from "./styles"
import Image from "next/image";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { BsTrash } from 'react-icons/bs'
import { toRealBRFormat } from "../../helpers/ValuesFormat";
import Link from "next/link";


type Props = {
  item: Product
}

export const CartItem = ({ item }: Props) => {

  const cart = useContext(CartContext)
  
  return (
      
        <Container>
          <Link href={`/products/${item.id}`}>
          <ImageStyled>
              <Image
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
                layout="raw"
              />
            </ImageStyled>
            </Link>

            <Description>
              
              <Link href={`/products/${item.id}`}>
                <Title>
                  {item.title}
                </Title>
              </Link>

              <Details>

                <Values>
                  <div className="high-price">de {toRealBRFormat(item.price * 1.25)}</div>
                  <Value>
                    Total: 
                    <span>{toRealBRFormat(item.price)} 
                      <span className="discount">( 25% de desconto )</span>
                    </span>
                  </Value>
                  <div className="split-price">ou em 10x de {toRealBRFormat(item.price / 10)} sem juros</div>
                  <div className="free-shipping">Frete grátis</div>
                </Values>
                

                <button onClick={() => (cart?.removeProducts(item))}>
                  <BsTrash />
                </button>

              </Details>

              
            </Description>
            
        </Container>
  )
}

