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
  width: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px;
  opacity: .7;
  cursor: pointer;
  transition: all ease 0.2s;

  .cart-shopp {
    color: red;
    font-size: 2rem;
  }

  &:hover {
    opacity: 1;
  }
`
export const CounterCart = styled.div`
  margin-right: .5rem;
  color: white;
  background-color: red;
  padding: .5rem;
  border-radius: 50%;
  text-align: center;
  font-size: .7rem;
`