import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #FF4742;
  border-radius: 15px;
  margin: 1rem auto;
  padding: .5rem;
`
export const ImageStyled = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;
`
export const Description = styled.div`
  width: 90%;
  margin: auto;
  padding: .5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  button {
    background: #FF4742;
    border: 1px solid #FF4742;
    border-radius: 20px;
    color: #FFFFFF;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 800;
    min-width: fit-content;
    padding: .7rem;
    user-select: none;
    margin-right: 10px;
    
    &:hover,
    &:active {
      background-color: initial;
      color: #FF4742;
      box-shadow: 5px 5px 5px gray;
    }
  }
`

export const Details = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h2`
  font-size: 1rem;
`
export const Values = styled.div`
  margin-right: 2rem;
  
  .high-price {
    font-size: .8rem;
    color: gray;
    font-weight: bold;
  }

  .split-price {
    font-size: .9rem;
  }

  .free-shipping {
    font-size: .8rem;
    color: green;
    font-weight: bold;
  }

`

export const Value = styled.div`
  font-size: 1.5rem;
  font-weight: 900;

  span {
    margin-left: .5rem;
    color: green;

    .discount {
      margin-left: .5rem;
      font-size: .8rem;
    }
  }
`
