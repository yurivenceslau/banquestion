import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction:column;
    width: 100%;
    height: 14rem;
    justify-content: center;
    align-items: center;
    margin-bottom:0.5rem ;
    @media screen and (max-width: 675px) {
      width: 100%;
      height: 12rem ;
    }
    
  img {
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
  }

  span {
    display: flex;
    justify-content: center;
    margin-top:0.5rem;
    align-items: center;
    font-size: 1.3rem;
    font-weight: 500;
  }
`;
