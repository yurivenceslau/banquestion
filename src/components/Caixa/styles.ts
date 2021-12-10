import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: whitesmoke;
  width: 90%;
  margin-top: 2.2rem;
  margin-bottom: 2.2rem;
  height: 100%;
  /* background-color: violet; */
  border-radius: 0.5rem;
  box-shadow: 3px 3px 16px 6px #aaaaaa;

  .titulo {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 7rem;
    /* background-color: royalblue; */
    span {
      margin-top: 1.5rem;
      margin-left: 2rem;
      font-size: 2.4rem;
      font-weight: 500;
    }
  }
  .questao {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 4vh;
    border-radius: 0.5rem;
    border-left: 0.5rem solid #1a6462;
    box-shadow: 0px -3px 8px #aaaaaa;

    .pergunta {
      display: flex;
      /* background-color: aqua; */
      width: 100%;
      /* min-height: 4rem; */
      /* background-color: aqua; */

      h2 {
        display:flex;
        width: 100%;
        font-weight: 500;
        padding-bottom: 0.5rem;
        /* min-height: 2.5rem; */
        /* background-color: red; */
        border-bottom: 1px solid #aaaaaa;
        margin:1rem  1rem;

      }
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 1rem;
      /* margin-top: 1.5rem; */
      margin-bottom: 1.5rem;
      /* background-color: crimson; */

      label{
          display: flex;
          font-weight: 400;
          font-size: 1rem;
        }

      input {
        display: flex;
        margin: 0;
        height: 1.2rem;
        width: 1.2rem;
        margin-right: 0.5rem;
      } 

      .opcao-1{
        display: flex;
        flex-direction: row;
        align-items: center;
        /* background-color: red; */
        height: 2.5rem;
        width: 100%;
      }

      .opcao-2{
        display: flex;
        flex-direction: row;
        align-items: center;
        /* background-color: green; */
        height: 2.5rem;
        width: 100%;
      }

      .opcao-3{
        display: flex;
        flex-direction: row;
        align-items: center;
        /* background-color: crimson; */
        height: 2.5rem;
        width: 100%;
      }

      .opcao-4{
        display: flex;
        flex-direction: row;
        align-items: center;
        /* background-color: gray; */
        height: 2.5rem;
        width: 100%;
        /* background-color: crimson; */
      }

      .opcao-5{
        display: flex;
        flex-direction: row;
        align-items: center;
        /* background-color: red; */
        height: 2.5rem;
        width: 100%;
      }
    }
  }

  // Colors
$color-1: #2ecc71;
$color-2: #3498db;
$color-3: #f1c40f;
$color-4: #e74c3c;

/* html, body {
  height: 100%;
  width: 100%;
  margin: 0;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #222;
} */
/* 
.custom-radios {
  
  div {
    display: inline-block;
  }

  input[type="radio"] {
    display: none;

    + label {
      color: #333;
      font-family: Arial, sans-serif;
      font-size: 14px;

      span {
        display: inline-block;
        width: 22px;
        height: 22px;
        margin: -1px 4px 0 0;
        vertical-align: middle;
        cursor: pointer;
        border-radius: 50%;
        border: 1px solid #FFFFFF;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.33);
        background-repeat: no-repeat;
        background-position: center;
        text-align: center;
        /* line-height: 20px; */
        /* background-color: #767676; */
    
        /* img {
          opacity: 0;
          width: 10px;
          height: 10px;
          transition: all .3s ease;
        }
      }
    }

    &#color-1 + label span {
      background-color: #767676;
    }

    &#color-2 + label span {
      background-color:  #3498db;
    }

    &#color-3 + label span {
      background-color: #e74c3c;
    }

   #color-4 + label span {
      background-color:#e74c3c ;
    }

    &:checked + label span img {
      opacity: 1;
    }
  }
} */ 
`;


