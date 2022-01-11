import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction:column;
    width: 100%;
    height: 16rem;
    justify-content: center;
    align-items: center;
    margin-bottom:0.5rem ;
    @media screen and (max-width: 675px) {
      width: 100%;
      height: 14rem ;
    }

    .perfil_conteudo{
    display: flex;
    justify-content:center;
    font-size:10rem;
    width: 10rem;
    height: 10rem;

    border-radius: 50%;
    /* background-color: red; */
    /* border: 5px solid #1a6462; */
    /* box-shadow: 3px 3px 16px 2px #aaaaaa; */

    svg{
      display: flex;
    position: absolute;

      /* z-index:1; */
      color:#1A6462;
      @media screen and (max-width: 675px) {
        /* margin-top: -1rem; */
        font-size:7.5rem;
    }

    }
  

    @media screen and (max-width: 675px) {
      width: 8rem;
      height: 8rem;
    }
  }

  span{
    /* height: 8rem; */
    margin-bottom:2rem ;
  }

  button {
    display: flex;
    justify-content:space-around;
    align-items:center;
     margin-top: 0.5rem;  
    height: 2.4rem;
    padding: 0.7rem 1rem;
  
    color: white;
    font-size: 1.2rem;

    background-image: linear-gradient(to left top, #1A6462, #059E75);
    border: 0;
    border-radius: 0.7rem;
    cursor: pointer;

    transition: filter, 0.2s;

    :hover {
      filter: brightness(0.7);

    }

    svg{
      display: flex;
      margin-right:1rem;
    }
  }

  /* .svg{
    display: flex;
    font-size:8rem;
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    border: 5px solid #1a6462;
    box-shadow: 3px 3px 16px 2px #aaaaaa;

    @media screen and (max-width: 675px) {
      width: 8rem;
      height: 8rem;
    }
  } */

    }
    
  /* img {
    display: flex;
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    border: 5px solid #1a6462;
    box-shadow: 3px 3px 16px 2px #aaaaaa;

    @media screen and (max-width: 675px) {
      width: 8rem;
      height: 8rem;
    }
  } */

  span {
    display: flex;
    justify-content: center;
    margin-top:0.5rem;
    align-items: center;
    font-size: 1.3rem;
    font-weight: 500;
  }
`;
