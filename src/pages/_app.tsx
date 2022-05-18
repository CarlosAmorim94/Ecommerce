import React from 'react'
import type { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/GlobalStyle'
import { Header } from '../components/Header'
import { CartProvider } from '../contexts/CartContext'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Header />

      <Component {...pageProps} />

      <GlobalStyle />
    </CartProvider>
  )
}

export default MyApp
