import styled from "styled-components";

interface propsContainer{
  isOpen:boolean;
}

export const Container = styled.main<propsContainer>`
    display: flex;
    min-height: 93.9vh;
    margin-left: ${(props) => props.isOpen ? '14rem' : '5rem'}; 
    margin-top:4.1rem;
   

  h1{
    margin-top: 1rem;
    margin-bottom: 2rem;
    margin-left: 2.3rem;
    margin-right: 1.3rem;
  }
  
`;
