import { HeaderStyled, LinkStyled, Logo, User } from './styles'
import { FaShoppingCart } from 'react-icons/fa'
import Image from 'next/image'
import logoShop from '../../../public/img/logo.png'
import Link from 'next/link'

export const Header = () => {


  return (
    <HeaderStyled>

      <Link href="/">
        <LinkStyled>
          <Logo>
            <Image
            src={logoShop}
            />
            
          </Logo>
          
          <h3>Online Shop</h3>

        </LinkStyled>
      </Link>

      <User>
        <FaShoppingCart className='cart-shopp' />
        <div>User</div>
      </User>

    </HeaderStyled>
  )
}
