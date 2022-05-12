import React from "react";
import Image from "next/image";
import { Product } from "../../types/Products";
import { Button, ItemPrice, ItemTitle, ProductItems } from "./styles";
import Link from "next/link";
import { toRealBRFormat } from "../../helpers/ValuesFormat";

type Props = {
  items: Product
}

export const ProductItem = ({ items } : Props) => {

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

        <Link href={`/products/${items.id}`}>
          <Button>Mais detalhes</Button>
        </Link>
        

    </ProductItems>
  )
}