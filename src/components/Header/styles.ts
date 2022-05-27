import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  height: fit-content;
  background-color: var(--white);
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LinkStyled = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const Logo = styled.div`
  width: 50px;
  margin: 10px;
`

export const Cart = styled.div`

  display: flex;
  align-items: center;
  margin: 10px;
  opacity: .7;
  cursor: pointer;
  transition: all ease 0.2s;
  position: relative;

  .cart-shopp {
    color: red;
    font-size: 2.5rem;
  }

  &:hover {
    opacity: 1;
  }
`
export const CounterCart = styled.div`
  width: 100%;
  text-align: center;
  color: white;
  background-color: transparent;
  font-size: 1rem;
  font-weight: 900;
  position: absolute;
  bottom: 0;
`