import React, { useContext } from "react";
import Image from "next/image";
import { Product } from "../../types/Products";
import { ButtonDetail, Buttons, ItemPrice, ItemTitle, ProductItems } from "./styles";
import Link from "next/link";
import { toRealBRFormat } from "../../helpers/ValuesFormat";
import { BsBagPlusFill } from "react-icons/bs";
import { CartContext } from "../../contexts/CartContext";

type Props = {
  items: Product
}

export const ProductItem = ({ items } : Props) => {

  const cart = useContext(CartContext)

  return (
    <ProductItems>
        <Image
        className="items-image"
        src={items.image}
        alt={items.title}
        width={500}
        height={500}
        layout="raw"
        />

        <ItemPrice>

          <div className="price">{toRealBRFormat(items.price)}</div>
          <div className="split-price">ou em 10x de {toRealBRFormat(items.price / 10)} sem juros</div>
          <div className="free-shipping">Frete grátis</div>

        </ItemPrice>
        

        <ItemTitle>{items.title}</ItemTitle>

        <Buttons>
          <Link href={`/products/${items.id}`}>
            <ButtonDetail>Mais detalhes</ButtonDetail>
          </Link>

          <BsBagPlusFill
            className="plus_cart"
            onClick={() => {cart?.addProducts(items)}}
            />
        </Buttons>
        
        

    </ProductItems>
  )
}