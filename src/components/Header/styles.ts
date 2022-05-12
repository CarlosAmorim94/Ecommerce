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

export const User = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .cart-shopp {
    color: red;
    font-size: 2rem;
  }
`