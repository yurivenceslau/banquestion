import styled from "styled-components";

interface propsContainer {
  isOpen: boolean;
}

export const Container = styled.main<propsContainer>`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f0e8f5;
  /* justify-content: center; */
  min-height: 91.4vh;
  margin-left: ${(props) => (props.isOpen ? "14rem" : "4.9rem")};
  margin-top: 4.1rem;

  @media screen and (max-width: 675px) {
    margin-left: ${(props) => (props.isOpen ? "14rem" : "0rem")};

    min-height: 90vh;
    padding-left: 0.75rem;
    padding-right: 0.75rem;

    height: ${(props) => (props.isOpen ? "1rem" : "")};
    overflow-y: ${(props) => (props.isOpen ? "hidden" : "")};
  }

  .autorizacao {
    display: flex;
    flex-direction:column;
    margin-top: 2.5rem;
    /* justify-content:center; */
    /* align-items:center; */
    margin-bottom: 2rem;
    background-color: white;
    width: 75%;
    min-height: 73vh;
    border-radius: 0.6rem;
    box-shadow: 3px 3px 16px 4px #aaaaaa;

    @media screen and (max-width: 675px) {
      width: 100%;
      padding: 1rem;
    }
  }

  .buttonDiv{
    display: flex;
    justify-content:center;
    align-items:center;
    width: 100%;
    height: 6rem;

  button {
    display: flex;
    justify-content:center;
    align-items:center;
    margin:0rem;
    padding: 0.7rem 1rem;
    /* width: 1rem; */
    /* height: 0.7rem ; */
    background-color: #1a6462;
    border: 0;
    border-radius: 0.7rem;
    cursor: pointer;

    transition: filter, 0.2s;

    :hover {
      filter: brightness(0.7);
    }
    span{
      color: white;
      margin:0rem;
      font-weight:500;
      font-size:1.2rem ;
    }
  }
}


  .tituloAutorizacao {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 7rem;

    span {
      font-size: 1.6rem;
      font-weight: 600;
      /* border-bottom:1px solid gray; */
    }
  }

  .instrucoes {
    padding-right: 2.5rem;
    @media screen and (max-width: 675px) {
      padding-right: 1rem;
    }

    span {
      display: flex;
      font-size: 1.3rem;
      /* padding-left:0.2rem; */

      font-weight: 450;
      margin-bottom: 1rem;

      @media screen and (max-width: 675px) {
        display: flex;
        
      }
    }

    ol {
      margin: 0;
      font-size: 1rem;
      text-align: justify;

      @media screen and (max-width: 675px) {
        padding-left: 0rem;
      }

      li {
        margin-left: 2rem;
        margin-bottom: 1rem;
      }
    }
  }
`;
