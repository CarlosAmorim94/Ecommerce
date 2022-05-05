import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  background-color: var(--white);
  height: fit-content;
`
export const Container = styled.div`
  margin: 0 auto;
  max-width: 1500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.div`
  width: 100px;
`

export const User = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .cart-shopp {
    color: red;
    font-size: 2rem;
  }
`