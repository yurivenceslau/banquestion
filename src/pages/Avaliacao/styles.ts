import styled from "styled-components";

interface propsContainer {
  isOpen: boolean;
}

export const Container = styled.main<propsContainer>`
  display: flex;
  margin: 0;
  transition: margin-left,0.2s;
  margin-left: ${(props) => props.isOpen ? '15rem' : '4.3rem' }; 
  /* min-height: 100vh;
  width: 100%; */
  min-height: 91vh;

  margin-top:4rem;
  justify-content: center;
  background-color: #F0E8F5;
  @media screen and (max-width:675px){
    min-height: 90vh; 
    margin-left: 0.75rem; 
    margin-right: 0.75rem; 
    
    height:${(props) => (props.isOpen ? "1rem" : "")};
    overflow-y:${(props) => (props.isOpen ? "hidden" : "")};
  }

  /* h1{
    background-color: crimson;
    margin-top:1rem;
    margin-bottom: 2rem;
    margin-left: 2.3rem;
    margin-right: 1.3rem;
  } */
`;