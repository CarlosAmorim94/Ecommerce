import { HeaderStyled, LinkStyled, Logo, User } from './styles'
import { FaShoppingCart } from 'react-icons/fa'
import Image from 'next/image'
import logoShop from '../../../public/img/logo.png'
import Link from 'next/link'
import { CartContext } from '../../contexts/CartContext'
import { useContext } from 'react'

export const Header = () => {

  const dados = useContext(CartContext)

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
          <div>{dados?.cartItems.map((product)=> (
            product.title
          ))}</div>

        </LinkStyled>
      </Link>

      <User>
        <FaShoppingCart className='cart-shopp' />
        <div>User</div>
      </User>

    </HeaderStyled>
  )
}
