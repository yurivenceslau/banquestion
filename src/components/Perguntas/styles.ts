import styled from "styled-components";

export const Container = styled.form`
  border-left: 0.7rem solid #1a6462;
  border-radius: 0.5rem;
  box-shadow: 3px 3px 16px 4px #aaaaaa;

  button {
    display: flex;
    margin-left: 1rem;
    margin-top: 3rem;
    padding: 0.7rem 1rem;
    margin-bottom: 1.5rem;
    background-image: linear-gradient(to left top, #1A6462, #059E75);
    border: 0;
    border-radius: 0.7rem;
    cursor: pointer;

    transition: filter, 0.2s;

    :hover {
      filter: brightness(0.7);
      /* padding: -0.7rem 1.2rem; */

    }
    /* box-shadow: 3px 3px 16px 4px #aaaaaa; */

    

    span{
      color: white;
      font-weight:500;
      font-size:1.2rem ;
    }
  }
`;
