import { HeaderStyled, Logo, User } from './styles'
import { FaShoppingCart } from 'react-icons/fa'
import Image from 'next/image'
import logoShop from '../../../public/img/logo.png'

export const Header = () => {


  return (
    <HeaderStyled>
      <div>
      <Logo>
        <Image
        src={logoShop}
        />
        
      </Logo>
      <h3>Online Shop</h3>
      </div>
      <User>
        <FaShoppingCart className='cart-shopp' />
        <div>User</div>
      </User>

    </HeaderStyled>
  )
}
