import styled from "styled-components";

export const Container = styled.main`

  button {
    display: flex;
    flex-direction: row; 
    /* justify-content: space-between; */
    align-items: center;
    width: 100%;
    padding-left:0.5rem;
    background-color: white;

    border: 0;
    cursor: pointer;
    
    transition: filter,0.2s;

    :hover{
      filter: brightness(0.9);
    }


  }
  img {
    display: flex;
    flex: 1;

    width: 2.2rem;
    height: 2.2rem;

    margin-left: 0.7rem;
    margin-right: 2.4rem; 
  }
  h2{
    margin-right: 5.7rem; 
  }
`;

export const Content = styled.div``;
