import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  /* align-items:center; */

  flex-direction: row;
  @media screen and (max-width: 740px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 736px) and (min-width: 736px) {
    display: flex;
    flex-direction: column;
    /* align-items:center; */
    width: 100%;
  }

  @media screen and (min-width: 540px) and (max-width: 540px) {
    display: flex;
    align-items: center;
  }

  .baseDados {
    background-color: white;
    /* padding-bottom: 1rem; */
    width: 35%;
    border-radius: 0.6rem;
    /* background-color: red; */
    margin: 1.5rem 5rem 1.5rem 1.5rem;
    /* box-shadow: 3px 3px 16px 4px #aaaaaa; */
    border: 1px solid #77787a;

    /* margin-left: 2rem; */

    /* border-bottom:14px solid red; */
    @media screen and (max-width: 675px) {
      width: 90%;
      margin: 1rem;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
      width: 40%;
      margin: 1.5rem;
    }

    @media screen and (max-width: 736px) and (min-width: 736px) {
      display: flex;
      flex-direction: column;
      /* align-items:center; */
      width: 90%;
    }

    @media screen and (max-width: 740px) {
      width: 90%;
      margin: 1rem;
    }

    @media screen and (min-width: 1280px) and (max-width: 1280px) {
      width: 40%;
      margin: 1.5rem;
    }
    @media screen and (max-width: 768px) and (min-width: 768px) {
      margin: 1rem;
      width: 45%;
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

    /* padding: 0rem 1rem; */
    /* background-color: red; */
    /* border: 1px solid #77787A; */
    padding: 0;

    /* border-radius: 0.5rem; */
    /* justify-content:center;
    align-items:center; */
  }

  /* .nome1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    color: black;
    border: 1px solid #77787a;
    width: 100%;
    min-height: 2rem;
    margin-bottom: 0.5rem;
    border-radius: 0.24rem;

    textarea {
      display: flex;
      justify-content:center;
      align-items:center;
      

      min-height: 1rem;

      width: 70%;
      padding: 0rem 1rem;
      margin-left: 0.3rem;

      font-size: 1rem;
      font-weight: 500;
      border-radius: 0.24rem;
      border:1px solid #77787A;

      border: 0px solid transparent;
      @media screen and (max-width: 675px) {
        width: 100%;
        padding: 0rem 0.5rem;
      }
    }
    .MuiInputBase-root.MuiFilledInput-root.MuiFilledInput-underline.MuiInputBase-formControl.MuiInputBase-multiline.MuiFilledInput-multiline{
      background-color: transparent;
      padding: 0;
      ::after{
        background-color: red;
        width: 0;

      }
    }
    

    h1 {
      display: flex;
      align-items: center;
      flex-direction: row;
      width: 100%;
      margin: 0;
      min-height: 2rem;
      border-radius: 0.24rem;

      opacity: 77%;
      font-size: 1rem;
      font-weight: 500;
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
    }
  }

   */

  .dado {
    display: flex;
    opacity: 0.8;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    color: black;
    width: 100%;
    min-height: 2rem;
    /* margin-bottom: 0.5rem; */
    border: 1px solid #77787a;
    border-left: 0;
    border-bottom: 0;
    border-right: 0;
    padding: 0.5rem 0rem;

    :last-child {
      border: 1px solid #77787a;
      border-left: 0;
      border-right: 0;
      border-radius: 0rem 0 0.5rem 0.5rem;
      /* border-top:0 ; */
    }

    /* border-radius: 0.24rem; */

    @media screen and (max-width: 675px) {
      width: 100%;
    }

    span {
      opacity: 85%;
      font-size: 1rem;

      font-weight: 550;
      margin-left: 1rem;
      margin-right: 1rem;

      @media screen and (max-width: 675px) {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
      }
    }
  }
  .indicador {
    font-weight: 700 !important;
  }

  .sobre {
    background-color: white;
    /* padding-bottom: 1rem; */
    width: 35%;
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
    @media screen and (max-width: 740px) {
      width: 90%;
      margin: 1rem;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
      width: 40%;
    }
    @media screen and (min-width: 1280px) and (max-width: 1280px) {
      width: 40%;
      margin: 1.5rem;
    }
    @media screen and (max-width: 768px) and (min-width: 768px) {
      margin: 1rem;
      width: 45%;
    }
    @media screen and (max-width: 736px) and (min-width: 736px) {
      display: flex;
      flex-direction: column;
      /* align-items:center; */
      width: 90%;
    }
  }
`;
