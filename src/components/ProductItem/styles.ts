import styled from "styled-components";

export const ProductItems = styled.li`
  width: 22%;
  height: 350px;
  margin: 1rem auto;
  border: 1px solid red;
  border-radius: 1rem;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all ease .3s;
  

  .items-image {
    width: 50%;
    height: 50%;
  }

  &:hover {
    box-shadow: 5px 5px 5px gray;
    transform: translateY(-5px);
    cursor: pointer;
  }
`
export const ItemTitle = styled.div`
  width: 100%;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: auto;
`
export const ItemPrice = styled.div`
  width: 100%;
  margin: auto;
  
  .price {
    font-size: 1.5rem;
    color: black;
    font-weight: bold;
  }

  .split-price {
    font-size: .7rem;
    color: black;
    font-weight: bold;
  }

  .free-shipping {
    font-size: .7rem;
    color: green;
    font-weight: bold;
  }
`

export const Button = styled.button`
 
  background: #FF4742;
  border: 1px solid #FF4742;
  border-radius: 20px;
  color: #FFFFFF;
  cursor: pointer;
  font-weight: 800;
  min-width: fit-content;
  padding: 5px 30px;
  user-select: none;

  &:hover,
  &:active {
    background-color: initial;
    color: #FF4742;
  }
`