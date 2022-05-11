import Link from "next/link";
import { GetStaticProps, GetStaticPaths } from 'next'
import React from "react";
import { Product, Products } from "../types/Products";


export const getStaticPaths: GetStaticPaths = async () => {

  const response = await fetch(`https://fakestoreapi.com/products`)
  const data = await response.json()

  return {
    paths: data.map((product: Product) => {
      const id = product.id.toString()
      return{
        params: {
          id
        } 
      }}),
      fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {

  
  const response = await fetch(`https://fakestoreapi.com/products/${params.id}`)
  const data = await response.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return { props: { data } }
}


export default function ProductsId ( { data }: Products ) {

  return (
  <>

    <Link href="/">
      <a>Voltar</a>
    </Link>

    <div>{data.title}</div>
    
    </>
  )
}