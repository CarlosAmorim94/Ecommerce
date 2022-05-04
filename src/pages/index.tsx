import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { Container } from '../styles/Home'
import { Header } from '../components/Header'
import { Product } from '../types/Products'
import Image from 'next/image'
import { GetServerSideProps } from 'next'

export const Home = ({data} : Product[]) => {
  /* const [dados, setDados] = useState([])

  /* useEffect(() => {
    const getData = async () => {
      

      setDados(data)
    }

    getData()
  }, []) */ 

  return (
    <>
      <Head>
        <title>Ecommerce</title>
        <meta name="Ecommerce" content="Ecommerce criado com next e typescript para treinar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Container>

        {/* área de Carrosel */}

        {/* área de Categorias */}
        <ul>
        {data.map((item: Product) => (
          <li key={item.id}>
            <Image
            src={item.image}
            alt={item.title}
            width={100}
            height={100}
            />

            {item.title}
          </li>
        ))}
        </ul>

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
