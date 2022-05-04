import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { Container } from '../styles/Home'
import { Header } from '../components/Header'
import { Product } from '../types/Products'
import Image from 'next/image'

export const Home = () => {
  const [dados, setDados] = useState([])

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('https://fakestoreapi.com/products')
      const data = await res.json()

      setDados(data)
    }

    getData()
  }, [])

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
        {dados.map((item: Product) => (
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

export default Home
