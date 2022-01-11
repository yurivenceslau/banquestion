import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
/* background-color: red; */

background-color: whitesmoke;
/* border-radius:50%; */

box-shadow: 3px 3px 16px 6px #aaaaaa;
width: 70%;
/* height: 100%; */

border-radius: 0.7rem;
margin-top: 2.2rem;
margin-bottom: 2.2rem;

@media screen and (max-width:675px){
    width: 100%; 
    
  }
  @media screen and (min-width:768px) and (max-width:1024px){
    width: 90%; 
    
  }
`;
