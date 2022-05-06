import React from "react";
import Image from "next/image";
import { Product } from "../../types/Products";
import { ItemPrice, ItemTitle, ProductItems } from "./styles";

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

        <ItemTitle>{items.items.title}</ItemTitle>
        
        <ItemPrice>R$ {items.items.price}</ItemPrice>

        <button>Ver mais</button>
    </ProductItems>
  )
}