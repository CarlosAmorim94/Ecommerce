import { HeaderStyled, LinkStyled, Logo, Cart, CounterCart } from './styles'
import { FaShoppingBag } from 'react-icons/fa'
import Image from 'next/image'
import logoShop from '../../../public/img/logo.png'
import Link from 'next/link'
import { CartContext } from '../../contexts/CartContext'
import { useContext } from 'react'


export const Header = () => {

  const cart: any = useContext(CartContext)
  

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

      <Link href="/cart">
        <a>
          <Cart>
            {cart?.cartItems.length > 0 &&
            <CounterCart>{cart?.cartItems.length < 10 ? `0${cart.cartItems.length}` : `${cart.cartItems.length}`}</CounterCart>
            }
            
            <FaShoppingBag className='cart-shopp' />
          
          </Cart>
        </a>
      </Link>

    </HeaderStyled>
  )
}
