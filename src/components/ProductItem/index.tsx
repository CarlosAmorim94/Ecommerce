import React from "react";
import Image from "next/image";
import { Product } from "../../types/Products";
import { Button, ItemPrice, ItemTitle, ProductItems } from "./styles";
import Link from "next/link";

type Props = {
  items: Product
}

export const ProductItem = (items: Props) => {

  return (
    <ProductItems>
        <Image
        className="items-image"
        src={items.items.image}
        alt={items.items.title}
        width={500}
        height={500}
        layout="raw"
        />

        <ItemPrice>

          <div className="price">R$ {(items.items.price).toFixed(2)}</div>
          <div className="split-price">Ou em 10x de R${(items.items.price / 10).toFixed(2)} sem juros</div>
          <div className="free-shipping">Frete grátis</div>

        </ItemPrice>
        

        <ItemTitle>{items.items.title}</ItemTitle>

        <Link href={`/${items.items.id}`}>
          <Button>Mais detalhes</Button>
        </Link>
        

    </ProductItems>
  )
}