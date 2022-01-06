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
    background-color: white;
    /* padding-bottom: 1rem; */
    width: 45%;
    border-radius: 0.6rem;
    /* background-color: red; */
    margin: 1.5rem;
    /* box-shadow: 3px 3px 16px 4px #aaaaaa; */
    border: 1px solid #77787a;

    /* margin-left: 2rem; */

    /* border-bottom:14px solid red; */
    @media screen and (max-width: 675px) {
      width: 90%;
      margin: 1rem;
    }

    @media screen and (max-width: 731px) {
      width: 90%;
      margin: 1rem;
    }
  }

  .tituloDados {
    display: flex;
    align-items: center;
    width: 100%;
    height: 3rem;
    /* margin-bottom: 1rem; */
    border-radius: 0.4rem 0.4rem 0 0;
    background-color: #aaaaaa;
    border: 0;
    border: 1px solid #77787a;

    span {
      display: flex;
      color: white;
      margin-left: 1rem;
      font-size: 1.4rem;
      font-weight: 500;
    }
  }

  .dados {
    display: flex;
    flex-direction: column;
    padding: 0rem 1rem;
    /* background-color: red; */
    /* border: 1px solid #77787A; */
    padding: 0.5rem 0.5rem 2rem 0.5rem;

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
    border: 1px solid #77787a;

    color: black;
    width: 100%;
    min-height: 2rem;
    margin-bottom: 0.5rem;
    /* border: 1px solid #77787A; */
    border-radius: 0.24rem;

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
    margin-bottom: 0.5rem;
    border: 1px solid #77787a;

    /* border: 1px solid #77787A; */
    border-radius: 0.24rem;

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

  .nome1 {
    display: flex;
    flex-direction: row;
    /* padding:0rem 2rem; */
    justify-content: space-between;
    align-items: center;
    background-color: white;
    color: black;
    border: 1px solid #77787a;
    width: 100%;
    min-height: 2rem;
    margin-bottom: 0.5rem;
    border-radius: 0.24rem;

    input {
      display: flex;
      text-align: end;
      /* align-items:center; */

      min-height: 2rem;
      width: 70%;
      padding: 0rem 1rem;
      margin-left: 0.3rem;

      /* color: red; */
      font-size: 1rem;
      /* background-color: red; */
      font-weight: 500;
      border-radius: 0.24rem;
      /* border:1px solid #77787A; */

      border: 1px solid transparent;
      @media screen and (max-width: 675px) {
        width: 100%;
        padding: 0rem 0.5rem;
      }
    }

    h1 {
      display: flex;
      /* justify-content: space-between; */
      /* justify-content:center; */
      align-items: center;
      flex-direction: row;
      width: 100%;
      margin: 0;
      min-height: 2rem;
      border-radius: 0.24rem;

      opacity: 77%;
      font-size: 1rem;
      font-weight: 500;
      /* margin-left: 1rem; */
      /* margin-right: 1rem; */
    }

    span {
      display: flex;
      justify-content: space-between;

      align-items: center;
      flex-direction: row;
      width: 100%;
      min-height: 2rem;
      border-radius: 0.24rem;

      opacity: 77%;
      font-size: 1rem;
      font-weight: 500;
      margin-left: 1rem;
      @media screen and (max-width: 675px) {
        width: 100%;
        margin-left: 0.5rem;
      }
      /* margin-right: 1rem; */
    }
  }

  .telefone {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    color: black;
    width: 100%;
    margin-bottom: 0.5rem;
    min-height: 2rem;
    border: 1px solid #77787a;

    /* border: 1px solid #77787A; */
    border-radius: 0.24rem;

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
    margin-bottom: 0.5rem;
    min-height: 2rem;
    border: 1px solid #77787a;

    /* border: 1px solid #77787A; */
    border-radius: 0.24rem;

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
    border: 1px solid #77787a;

    /* border: 1px solid #77787A;
    border-width: 1px 0px 1px 0px; */
    border-radius: 0.24rem;

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
    margin-bottom: 0.5rem;
    border: 1px solid #77787a;
    border-radius: 0.24rem;

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

  .curso {
    display: flex;
    /* padding:0rem 2rem; */
    justify-content: space-between;
    align-items: center;
    background-color: white;
    color: black;
    width: 100%;
    min-height: 2rem;
    margin-bottom: 0.5rem;
    border: 1px solid #77787a;
    border-radius: 0.24rem;

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

  .codigo {
    display: flex;
    /* padding:0rem 2rem; */
    justify-content: space-between;
    align-items: center;
    background-color: white;
    color: black;
    width: 100%;
    min-height: 2rem;
    margin-bottom: 0.5rem;
    border: 1px solid #77787a;
    border-radius: 0.24rem;

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

  .data {
    display: flex;
    /* padding:0rem 2rem; */
    justify-content: space-between;
    align-items: center;
    background-color: white;
    color: black;
    width: 100%;
    min-height: 2rem;
    /* margin-bottom: 1.5rem; */
    border: 1px solid #77787a;
    border-radius: 0.24rem;

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
    background-color: white;
    /* padding-bottom: 1rem; */
    width: 45%;
    border-radius: 0.6rem;
    margin: 1.5rem;
    border: 1px solid #77787a;

    /* box-shadow: 3px 3px 16px 4px #aaaaaa; */
    /* border: 1px solid #77787A; */

    /* margin-right: 2rem; */

    @media screen and (max-width: 675px) {
      width: 90%;
      margin: 1rem;
    }
    @media screen and (max-width: 731px) {
      width: 90%;
      margin: 1rem;
    }
  }
`;
