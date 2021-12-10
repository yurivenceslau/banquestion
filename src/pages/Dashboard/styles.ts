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
  
  min-height: 98vh;
  margin-top:4rem;
  justify-content: center;
  background-color: #F0E8F5;

  /* h1{
    background-color: crimson;
    margin-top:1rem;
    margin-bottom: 2rem;
    margin-left: 2.3rem;
    margin-right: 1.3rem;
  } */
`;