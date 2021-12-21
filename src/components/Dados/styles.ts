import styled from "styled-components";

export const Container = styled.div`
  .baseDados {
    background-color: #1a6462;
    padding-bottom: 1rem;
    border: 7px solid whitesmoke;
    border-bottom:14px solid whitesmoke;
  }

  .tituloDados {
    display: flex;
    align-items: center;
    width: 100%;
    height: 3rem;
    margin-bottom: 1rem;
    /* border-radius: 0.5rem; */

    background-color: #c8c9c9;

    span {
      display: flex;
      color: black;
      margin-left: 0.7rem;
      font-size: 1.3rem;
      font-weight: 500;
    }
  }

  .dados {
    /* background-color: red; */
    padding: 0rem 1rem;
    border-radius: 0.5rem;

  }

  .email {
    display: flex;
    /* padding:0rem 2rem; */
    justify-content: space-between;
    align-items: center;
    background-color: white;
    color: black;
    width: 100%;
    height: 2rem;
    margin-bottom: 1rem;

    span {
      margin-left: 1rem;
      margin-right: 1rem;
      /* color: white; */
    }
  }

  .telefone {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    color: black;
    width: 100%;
    height: 2rem;

    span {
      margin-left: 1rem;
      margin-right: 1rem;
      /* color: white; */
    }
  }

  .sobre {
    background-color: #1a6462;
    padding-bottom: 1rem;
    border: 7px solid whitesmoke;
    border-bottom:14px solid whitesmoke;
  }
`;
