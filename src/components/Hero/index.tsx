import { Container, SearchBar, SubTitle, Title } from "./styles"
import { BsSearch } from 'react-icons/bs'
import Image from "next/image"
import backgroundHero from '../../../public/img/backgroundHero.jpg'


export const Hero = () => {

  return(
    <Container>


      <Title>Online Shop</Title>

      <SubTitle>Aqui tem de tudo, pelo menor preço!</SubTitle>

      <SearchBar>
        
        <input
        type='text'
        placeholder="Pesquisar..." />
        <button type="submit"><BsSearch /></button>

      </SearchBar>

    </Container>
  )
}