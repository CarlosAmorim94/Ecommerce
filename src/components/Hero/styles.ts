import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: url('../../../img/image4.webp');
  background-color: #cccccc;
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover;
`
export const Title = styled.h1`
  font-size: 5rem;
  margin-bottom: 1rem;
  color: #fff;
  text-shadow: 2px 2px 2px #000;
`

export const SubTitle = styled.h1`
  font-size: 2rem;
  font-weight: 100;
  margin-bottom: 1.5rem;
  color: #fff;
  text-shadow: 2px 2px 2px #000;
`

export const SearchBar = styled.div`

  background-color: white;
  border: 1px solid black;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  
  button {
    border: none;
    background-color: transparent;
    font-size: 1.5rem;
    

    &:hover {
      color: red;
    }
  }

  input {
    border: none;
    background-color: transparent;
    font-size: 1.5rem;
  }
`
