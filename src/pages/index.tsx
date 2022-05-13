import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { Container, ProductsArea, ScreenWarning } from '../styles/Home'
import { Product, Products } from '../types/Products'
import { Hero } from '../components/Hero'
import { ProductItem } from '../components/ProductItem'


export const Home = () => {

  const [ list, setList ] = useState([])
  const [ loading, setLoading ] = useState(false)
  
  useEffect(() => {

    async function getAPI() {
      setLoading(true)

      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()

      setLoading(false)
      setList(data)
    } 
    
    getAPI()

  },[])

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
        <title>Ecommerce</title>
        <meta name="Ecommerce" content="Ecommerce criado com next e typescript para treinar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Hero />

      <Container>

        {/* área de Categorias */}


        <ProductsArea>

          {loading && <ScreenWarning>
            Carregando...
          </ScreenWarning>  }

          {!loading && list.length > 0 &&

          list.map((item: Product) => (

            <ProductItem key={item.id} items={item}/>

          ))}


          {!loading && list.length === 0 && 
          
          <ScreenWarning>
            Não há produtos cadastrados!
          </ScreenWarning>
          }


        </ProductsArea>

      </Container>

    </>
  )
}

export default Home
