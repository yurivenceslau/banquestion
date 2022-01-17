import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 1.5rem; */
  width: 100%;
  /* color: blue; */

  @media screen and (max-width: 675px) {
    width: 100%;
    /* height: 8rem; */
  }
`;

export const TituloNovoPerfil = styled.div`
  display: flex;
  align-items: center;
  height: 5.8rem;
  padding: 1.5rem;

  justify-content: space-between;
  border-bottom: 1px solid #aaaaaa;
  flex-direction: row;
  /* flex-direction: column; */

  @media screen and (max-width: 725px) and (min-width: 280px) {
    display: flex;
    height: 9rem;
    /* align-items: initial; */
    justify-content: space-between;

    flex-direction: column;
  }

  span {
    display: flex;
    /* flex-direction: left; */
    font-size: 2.5rem;
    /* background-color: red; */

    margin: 0;
  }
  .salvar {
    display: flex;
    width: 13rem;
    justify-content: space-around;
    flex-direction: row;

    @media screen and (max-width: 725px) and (min-width: 280px) {
    display: flex;
    justify-content: space-between;
  }

    /* @media screen and (max-width: 675px) and (min-width: 280px) {
    display: flex;
    width: 9rem;
    
    flex-direction: column;
  } */
  }

  button {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 0.5rem;
    height: 2.4rem;
    width: 6rem;
    padding: 0.7rem 1rem;
    color: white;
    font-size: 1.2rem;
    border: 0;
    border-radius: 0.7rem;
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
    @media screen and (max-width: 725px) and (min-width: 280px) {
      /* margin-top: 1rem; */
      /* height: 2rem; */
      font-size: 1.2rem;
      display: flex;
    }
  }

  .botaoSalvar {
    display: flex;
    color: white;
    background-image: linear-gradient(to left top, #1A6462, #059E75);

  }

  .botaoCancelar {
    display: flex;
    color: black;
    opacity: 85%;
    font-weight: 450;
    /* background-color: #aaaaaa; */
    border: 2px solid #1a6462;
  }
`;

export const ModalPerfil = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 1rem;

  padding: 1.5rem;
  height: 100%;

  @media screen and (max-width: 675px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (min-width: 720px) and (max-width: 720px) {
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 740px) and (max-width: 740px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (min-width: 692px) and (max-width: 692px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (min-width: 725px) and (max-width: 725px) {
    display: flex;
    flex-direction: column;
  }

  span {
    display: flex;
    font-weight: 500;
    opacity: 0.5;
    /* background-color: red; */
  }

  select {
    border: 0;
    opacity: 90%;
    min-height: 2rem;
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
    font-size: 1rem;
    font-weight: 500;
    width: 20rem;
    /* margin-left:1rem ; */
    background-color: whitesmoke;
    border: 1px solid black;

    @media screen and (min-width: 768px) and (max-width: 768px) {
      width: 15rem;
    }
    @media screen and (min-width: 820px) and (max-width: 820px) {
      width: 16rem;
    }
    @media screen and (min-width: 280px) and (max-width: 280px) {
      width: 15rem;
    }
    }

  input {
    border: 0;
    opacity: 90%;
    min-height: 2rem;
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
    font-size: 1rem;
    font-weight: 500;
    width: 20rem;
    /* margin-left:1rem ; */
    background-color: whitesmoke;
    border-bottom: 1px solid black;
    :focus,
    :hover {
      /* outline-color:whitesmoke; */
    }

    @media screen and (min-width: 768px) and (max-width: 768px) {
      width: 15rem;
    }
    @media screen and (min-width: 820px) and (max-width: 820px) {
      width: 16rem;
    }
    @media screen and (min-width: 280px) and (max-width: 280px) {
      width: 15rem;
    }
  }
`;
