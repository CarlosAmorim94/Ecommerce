import Link from "next/link";
import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from "next/router";
import React from "react";
import { Product, Products } from "../../types/Products";

export const getStaticPaths: GetStaticPaths = async () => {

  const response = await fetch(`https://fakestoreapi.com/products`)
  const data = await response.json()

  const path = data.map((product: Product) => {
    return {
      params: {
        productsId: `${product.id}`
      }
    }
  })

  console.log(`AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA ${path}`)

  return {
    paths: [
      { params: { path } }
    ],
    fallback: false
  };

}

export const getStaticProps: GetStaticProps = async () => {

  const router = useRouter()
  const { slug } = router.query

  console.log(`BBBBBBBBBBBBBBBBBBBBBBBB ${slug}`)

  const response = await fetch(`https://fakestoreapi.com/products/${slug}`)
  const data = await response.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return { props: { data } }
}


export default function ProductsId ( { data }: Products ): JSX.Element {

  return (
  <>

    <Link href="/">
      <a>Voltar</a>
    </Link>

    <div>{data.title}</div>
    
    </>
  )
}