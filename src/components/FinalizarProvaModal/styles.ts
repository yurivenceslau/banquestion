import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  span {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
`;
export const TituloModal = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    border: 0;
    background-color: whitesmoke;
    cursor: pointer;
    padding: 0;
    width: 2rem;
    height: 2rem;

    svg {
      width: 1.9rem;
      height: 1.9rem;
      opacity: 0.8;
    }
  }
`;

export const Botoes = styled.div`
  margin: 1rem 0;
  width: 15rem;
  display: flex;
  justify-content: space-around;
  button {
    border: 0;
    border-radius: 0.7rem;
    width: 5rem;
    height: 2rem;
    cursor: pointer;
    color: white;
  }
  .sim {
    background-image: linear-gradient(to left top, #2FBA87, #135E58);
  }
  .nao {
    /* background-color:  #E52E4D; */
    background-image: linear-gradient(to left top, #E52E4D, #A82819);
  }
`;
