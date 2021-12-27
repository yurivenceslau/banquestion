import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  /* background-color: red; */
  /* align-items:center; */

  flex-direction: row;
  @media screen and (max-width: 675px) {
    display: flex;
    flex-direction: column;
  }

  .baseDados {
    background-color: #1a6462;
    padding-bottom: 1rem;
    width: 45%;
    border-radius: 0.6rem;
    /* background-color: red; */
    margin: 1.5rem;
    /* margin-left: 2rem; */

    /* border-bottom:14px solid red; */
    @media screen and (max-width: 675px) {
      width: 90%;
      margin: 1rem;
    }

    @media screen and (max-width:731px) {
      width: 90%;
      margin: 1rem;
    }

  }

  .tituloDados {
    display: flex;
    align-items: center;
    width: 100%;
    height: 3rem;
    margin-bottom: 1rem;
    border-radius: 0.6rem 0.6rem 0 0;
    background-color: #c8c9c9;

    span {
      display: flex;
      color: black;
      margin-left: 1rem;
      font-size: 1.4rem;
      font-weight: 500;
    }
  }

  .dados {
    display: flex;
    flex-direction: column;
    padding: 0rem 1rem;
    /* border-radius: 0.5rem; */
    /* justify-content:center;
    align-items:center; */
  }

  .email {
    display: flex;
    /* padding:0rem 2rem; */
    justify-content: space-between;
    align-items: center;
    background-color: white;
    
    color: black;
    width: 100%;
    min-height: 2rem;
    margin-bottom: 1.5rem;

    @media screen and (max-width: 675px) {
      width: 100%;
      padding: 0rem 0.5rem;
    }

    span {
      font-size: 1rem;
      opacity: 77%;
      font-weight: 500;
      margin-left: 1rem;
      margin-right: 1rem;

      @media screen and (max-width: 675px) {
        margin-left: 0rem;
        margin-right: 0rem;
      }
    }
  }

  .nome {
    display: flex;
    /* padding:0rem 2rem; */
    justify-content: space-between;
    align-items: center;
    background-color: white;
    color: black;
    width: 100%;
    min-height: 2rem;
    margin-bottom: 1.5rem;

    @media screen and (max-width: 675px) {
      width: 100%;
    }

    span {
      opacity: 77%;
      font-size: 1rem;
      font-weight: 500;
      margin-left: 1rem;
      margin-right: 1rem;

      @media screen and (max-width: 675px) {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
      }
    }
  }

  .telefone {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    color: black;
    width: 100%;
    margin-bottom: 1.5rem;
    min-height: 2rem;

    @media screen and (max-width: 675px) {
      width: 100%;
    }

    span {
      opacity: 77%;
      font-size: 1rem;
      font-weight: 500;
      margin-left: 1rem;
      margin-right: 1rem;

      @media screen and (max-width: 675px) {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
      }
    }
  }

  .cpf {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    color: black;
    width: 100%;
    margin-bottom: 1.5rem;
    min-height: 2rem;

    @media screen and (max-width: 675px) {
      width: 100%;
    }

    span {
      opacity: 77%;
      font-size: 1rem;
      font-weight: 500;
      margin-left: 1rem;
      margin-right: 1rem;

      @media screen and (max-width: 675px) {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
      }
    }
  }

  .empresa {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    color: black;
    width: 100%;
    min-height: 2rem;

    @media screen and (max-width: 675px) {
      width: 100%;
    }

    span {
      opacity: 77%;
      font-size: 1rem;
      font-weight: 500;
      margin-left: 1rem;
      margin-right: 1rem;

      @media screen and (max-width: 675px) {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
      }
    }
  }

  .pagamento {
    display: flex;
    /* padding:0rem 2rem; */
    justify-content: space-between;
    align-items: center;
    background-color: white;
    color: black;
    width: 100%;
    min-height: 2rem;
    margin-bottom: 1.5rem;

    @media screen and (max-width: 675px) {
      width: 100%;
    }

    span {
      opacity: 77%;
      font-size: 1rem;
      font-weight: 500;
      margin-left: 1rem;
      margin-right: 1rem;

      @media screen and (max-width: 675px) {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
      }
    }
  }

  .sobre {
    background-color: #1a6462;
    padding-bottom: 1rem;
    width: 45%;
    border-radius: 0.6rem;
    margin: 1.5rem;

    /* margin-right: 2rem; */

    @media screen and (max-width: 675px) {
      width: 90%;
      margin: 1rem;
    }
    @media screen and (max-width:731px) {
      width: 90%;
      margin: 1rem;
    }
    
  }
`;
