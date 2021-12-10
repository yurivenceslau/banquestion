import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  button {
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    align-items: center;
    width: 100%;
    padding-left: 0.5rem;
    /* background-color: white; */
    border: 0;
    background-color: whitesmoke;
    /* box-shadow: rgba(0,0,0,0.9); */
    cursor: pointer;

    transition: filter, 0.2s;

    :hover {
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
  h2 {
    margin-right: 5.7rem;
  }
`;
interface propsContent {
  isOpen: boolean;
}
export const Content = styled.div<propsContent>`
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .logo-topo {
    height: 2.5rem;
    width: 15.5rem;

    img {
      display: flex;
      justify-content: center;
      height: 2.5rem;
      width: 100%;
    }
  }

  .usuario-topo {
    display: flex;
    height: 4rem;
    width: 14rem;
    margin-right: 0.5rem;
    /* justify-content: space-around; */
    align-items: center;

    .div_spans {
      display: flex;
      flex-direction: column;
      /* width: 100%; */
      font-size: 0.9rem;
      margin-right: 0.3rem;

      flex: 4;
      font-weight: 400;

      justify-content: right;
      /* align-items: center; */

      span {
        display: flex;
        justify-content: right;
        text-align: right;
        /* width: 100%; */
      }
      .div_span-1 {
        font-weight: 500;
      }

      .div_span-2 {
        opacity: 0.7;
      }
    }

    .perfil {
      display: flex;
      height: 2.5rem;
      flex: 1;
      border-radius: 50%;
      justify-content: right;
      align-items: center;

      img {
        display: flex;
        height: 2.5rem;
        width: 2.5rem;
        border-radius: 50%;
        justify-content: right;
        margin: auto;
      }
    }
  }
`;
