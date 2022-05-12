import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 1500px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 2rem auto;
`

export const ImageStyled = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Info = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 1rem;
  
  .price {
    font-size: 1.5rem;
    color: black;
    font-weight: bold;
    margin: 1rem 0;

    span {
      font-size: 1rem;
      color: green;
    }
  }

  .split-price {
    font-size: 1rem;
    color: black;
    font-weight: bold;
    margin: 1rem 0;
  }

  .free-shipping {
    font-size: 1rem;
    color: green;
    font-weight: bold;
    margin: 1rem 0;
  }

  .high-price {
    color: gray;
    margin: 1rem 0;
  }
`

export const Button = styled.button`
 
  background: #FF4742;
  border: 1px solid #FF4742;
  border-radius: 20px;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 800;
  min-width: fit-content;
  padding: 10px 30px;
  user-select: none;

  &:hover,
  &:active {
    background-color: initial;
    color: #FF4742;
    box-shadow: 5px 5px 5px gray;
  }
`