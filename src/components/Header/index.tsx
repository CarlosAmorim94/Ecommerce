import { Container, HeaderStyled, Logo, User } from './styles'
import { FaShoppingCart } from 'react-icons/fa'
import Image from 'next/image'
import logoShop from '../../../public/img/logo.png'

export const Header = () => {


  return (
    <HeaderStyled>
      <Container>

        <Logo>
          <Image
          src={logoShop}
          />
        </Logo>

        <User>
          <FaShoppingCart className='cart-shopp' />
          <div>User</div>
        </User>

      </Container>
    </HeaderStyled>
  )
}
