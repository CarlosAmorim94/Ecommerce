import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 1500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: .5rem auto;
`

export const UlList = styled.ul`
  width: 1500px;
`

export const ResumeHead = styled.header`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem auto;

  h1 {
    font-size: 2rem;
  }

  button {
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
    justify-items: center;
    align-items: center;
    margin: 1rem auto;

    &:hover,
    &:active {
      background-color: initial;
      color: #FF4742;
      box-shadow: 5px 5px 5px gray;
    }

    .trash {
      font-size: 1.5rem;
    }
  }
`
export const ValueTotal = styled.div`
  font-size: 2rem;
  font-weight: 900;

  span {
    color: green;
  }
`