import { Container, SearchBar, SubTitle, Title } from "./styles"
import { BsSearch } from 'react-icons/bs'

type Props = {
  setSearchText: any;
  value: string;
}


export const Hero = ({ setSearchText, value }: Props) => {

  return(
    <Container>

      <Title>Online Shop</Title>

      <SubTitle>Aqui tem tudo, pelo menor preço!</SubTitle>

      <SearchBar>
        
        <input
        value={value}
        onChange={event => setSearchText(event.target.value.toLocaleLowerCase())}
        type='text'
        placeholder="Pesquisar..." />
        <button
        type="submit"
        >
          <BsSearch />
        </button>

      </SearchBar>

    </Container>
  )
}