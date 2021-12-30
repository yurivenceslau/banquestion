import styled from "styled-components";

interface propsContainer{
  isOpen:boolean;
}

export const Container = styled.main<propsContainer>`
    display: flex;
    background-color: #F0E8F5;
    justify-content:center;
    min-height: 91.4vh;
    margin-left: ${(props) => props.isOpen ? '14rem' : '4.9rem'}; 
    margin-top:4.1rem;
    
    @media screen and (max-width:675px){ 
    margin-left: ${(props) => props.isOpen ? '14rem' : '0rem'}; 
    
      
    min-height: 90vh; 
    padding-left: 0.75rem; 
    padding-right: 0.75rem; 

    height:${(props) => (props.isOpen ? "1rem" : "")};
    overflow-y:${(props) => (props.isOpen ? "hidden" : "")};   
  }

 

  h1{
    margin-top: 1rem;
    margin-bottom: 2rem;
    margin-left: 2.3rem;
    margin-right: 1.3rem;
  }
  
`;
