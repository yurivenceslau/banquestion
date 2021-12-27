import styled from "styled-components";

interface propsContainer {
  isOpen: boolean;
}

export const Container = styled.main<propsContainer>`
  display: flex;
  align-items:center;
  flex-direction:column;
  background-color: #f0e8f5;
  justify-content: center;
  min-height: 91.4vh;
  margin-left: ${(props) => (props.isOpen ? "14rem" : "5rem")};
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
    margin-top: 2.5rem;
    margin-bottom: 2rem;
    /* margin-left: 2.3rem; */
    /* margin-right: 1.3rem; */
    background-color: white;
    width: 75%;

    @media screen and (max-width: 675px) {
      width: 100%;  
    }

    /* span {
      display: flex;
      justify-content: center;
      font-size: 1.8rem;
      font-weight: 500;
      margin-top: 3rem;
    } */
  }
`;
