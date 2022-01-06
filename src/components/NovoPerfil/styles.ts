import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 1.5rem; */
  width: 100%;
  /* color: blue; */
`;

export const TituloNovoPerfil = styled.div`
  display: flex;
  align-items: center;
  height: 5.8rem;
  padding: 1.5rem;

  justify-content: space-between;
  border-bottom: 1px solid #aaaaaa;
  flex-direction: row;

  span {
    display: flex;
    font-size: 2rem;
    margin: 0;
  }

  button {
    border: 0;
    padding: 0;
    height: 1.5rem;
    width: 1.5rem;
    background-color: whitesmoke;
    cursor: pointer;
    transition: filter, 0.2s;

    :hover {
      filter: brightness(0.7);
    }

    svg {
      height: 1.5rem;
      width: 1.5rem;
      color: #77787a;

      :hover {
        color: #474342;
      }
    }
  }
`;

export const A = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;

  padding: 1.5rem;
  height: 100%;

  span {
    display: flex;
    opacity: 0.8;
  }

  input {
    border: 0;
    margin-top:0.5rem;
    margin-bottom: 1rem;
    font-size: 1rem;
    width: 20rem;
    /* margin-left:1rem ; */
    background-color: whitesmoke;
    border-bottom: 1px solid black;
    :focus, :hover{
        outline-color:whitesmoke;
    }
  }
`;
