import styled from "styled-components";

export const ProductItems = styled.li`
  width: 22%;
  height: 300px;
  margin: 1rem auto;
  border: 1px solid red;
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all ease .3s;
  

  .items-image {
    width: 40%;
    height: 50%;
  }

  &:hover {
    box-shadow: 5px 5px 5px gray;
    transform: translateY(-5px);
    cursor: pointer;
  }
`
export const ItemTitle = styled.div`
  width: 90%;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`
export const ItemPrice = styled.div`

`