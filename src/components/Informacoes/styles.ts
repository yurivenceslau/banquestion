import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;

background-color: whitesmoke;

box-shadow: 3px 3px 16px 6px #aaaaaa;
width: 90%;
/* height: 100%; */

border-radius: 0.5rem;
margin-top: 2.2rem;
margin-bottom: 2.2rem;



@media screen and (max-width:675px){
    width: 100%; 
    
  }
`;
