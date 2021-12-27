import styled from "styled-components";


export const Container = styled.div`
  /* background-color:#1A6462 ; */
 


  .pergunta {
    display: flex;
    width: 100%;

    h2 {
      display: flex;
      width: 100%;
      font-weight: 500;
      text-align: justify;

      padding-bottom: 0.5rem;
      /* min-height: 2.5rem; */
      /* background-color: red; */
      border-bottom: 1px solid #aaaaaa;
      margin: 1rem 1rem;
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

      label {
        display: flex;
        font-weight: 400;
        font-size: 1rem;
      }

      input {
        display: flex;
        flex-direction:row ;
        margin: 0;
        /* justify-content:right; */
        height: 1.2rem;
        width: 1.2rem;
        /* margin-left:5rem; */
        margin-right: 0.5rem;
        background-color:red ;
      }

      .opcao {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 2.5rem;
        width: 100%;
      }
      /*
 
      .opcao-2 {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 2.5rem;
        width: 100%;
      }

      .opcao-3 {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 2.5rem;
        width: 100%;
      }

      .opcao-4 {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 2.5rem;
        width: 100%;
      }

      .opcao-5 {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 2.5rem;
        width: 100%;
      } */
    }
`;
