import Link from "next/link";
import { GetStaticProps, GetStaticPaths } from 'next'
import React from "react";
import { Product, Products } from "../../types/Products";
import Image from "next/image";
import { Button, Container, ImageStyled, Info } from "./styles";
import ReactStars from "react-rating-stars-component"
import { toRealBRFormat } from "../../helpers/ValuesFormat";


export const getStaticPaths: GetStaticPaths = async () => {

  const response = await fetch(`https://fakestoreapi.com/products`)
  const data = await response.json()

  return {
    paths: data.map((product: Product) => {
      //Precisei converter o valor para string antes de retornar para o params, passar direto params:{product.id.toString()} não resolve
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

  const ratingChanged = (newRating: any) => {
    console.log(newRating);
  }

  return (
    <Container>

      <ImageStyled>
        <Image
          src={data.image}
          alt={data.title}
          width={600}
          height={600}
          layout="raw"
        />
      </ImageStyled>
    
      <Info>
        <div className="rating">Nota: {data.rating?.rate} / 5.0 ( {data.rating?.count} avaliações )</div>
        <ReactStars
          value={data.rating?.rate}
          count={5}
          size={24}
          isHalf={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#bea201"
        />
        <div className="high-price">de {toRealBRFormat(data.price * 1.25)}</div>
        <div className="price">por {toRealBRFormat(data.price)} à vista  <span>( 25% de desconto )</span></div>
        <div className="split-price">ou em 10x de {toRealBRFormat(data.price / 10)} sem juros</div>
        <div className="free-shipping">Frete grátis</div>

        <Button>Adicionar ao carrinho</Button>
      </Info>
        
    
    </Container>
  )
}