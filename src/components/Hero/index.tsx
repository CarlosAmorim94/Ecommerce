import { Container, SearchBar, SubTitle, Title } from "./styles"
import { BsSearch } from 'react-icons/bs'
import { useState } from "react"


export const Hero = () => {

  const [search, setSearch] = useState('')
  console.log(search)

  return(
    <Container>


      <Title>Online Shop</Title>

      <SubTitle>Aqui tem tudo, pelo menor preço!</SubTitle>

      <SearchBar>
        
        <input
        value={search}
        onChange={event => setSearch(event.target.value)}
        type='text'
        placeholder="Pesquisar..." />
        <button type="submit"><BsSearch /></button>

      </SearchBar>

    </Container>
  )
}