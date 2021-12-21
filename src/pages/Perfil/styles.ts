import styled from "styled-components";

interface propsContainer{
  isOpen:boolean;
}

export const Container = styled.main<propsContainer>`
    display: flex;
    justify-content:center;
    min-height: 91.4vh;
    margin-left: ${(props) => props.isOpen ? '14rem' : '5rem'}; 
    margin-top:4.1rem;
    
    @media screen and (max-width:675px){ 
      
    min-height: 90vh; 
    margin-left: 0.75rem; 
    margin-right: 0.75rem; 
  }

 

  h1{
    margin-top: 1rem;
    margin-bottom: 2rem;
    margin-left: 2.3rem;
    margin-right: 1.3rem;
  }
  
`;
