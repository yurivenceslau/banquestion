import styled from "styled-components";

export const Container = styled.div`
  .titulo {
    display: flex;
    /* justify-content:center; */
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 6rem;

    @media screen and (max-width: 675px) {
      display: flex;
      justify-content: center;

      span {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 1.4rem;
        padding-right: 1.4rem;
        /* background-color: red; */
        /* margin-left: 2rem; */
      }
    }
    /* background-color: royalblue; */
    span {
      margin-top: 1.2rem;
      margin-bottom: 1.2rem;
      font-size: 2.2rem;
      font-weight: 500;
    }
  }
`;
