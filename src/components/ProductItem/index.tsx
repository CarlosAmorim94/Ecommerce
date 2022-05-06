import React from "react";
import Image from "next/image";
import { Product, Products } from "../../types/Products";
import { ProductItems } from "./styles";

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

        <div>{items.items.title}</div>
        
        <div>R$ {items.items.price}</div>
    </ProductItems>
  )
}