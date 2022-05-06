import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { Container, ProductItems, ProductsArea } from '../styles/Home'
import { Header } from '../components/Header'
import { Product, Products } from '../types/Products'
import { Hero } from '../components/Hero'
import Image from 'next/image'
import { ProductItem } from '../components/ProductItem'


export const Home = ({ data } : Products) => {
  

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
        <title>Ecommerce</title>
        <meta name="Ecommerce" content="Ecommerce criado com next e typescript para treinar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Hero />

      <Container>

        {/* área de Categorias */}


        <ProductsArea>
          {data.map((item: Product) => (

            <ProductItem key={item.id} items={item}/>

          ))}
        </ProductsArea>

      </Container>

    </>
  )
}

export async function getServerSideProps() {

  const response = await fetch('https://fakestoreapi.com/products')
  const data = await response.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data
    }, 
  }
}

export default Home
