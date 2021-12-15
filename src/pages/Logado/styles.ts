import styled from "styled-components";

interface propsNav{
  isOpen: boolean;
}
export const Nav = styled.main<propsNav>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

 

  @media screen and (max-width: 675px) {
    display: flex;
    justify-content: initial;
  }
 

  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding-left: 0.5rem;
    border: 0;
    background-color: whitesmoke;
    cursor: pointer;
   
    transition: filter, 0.2s;

    :hover {
      filter: brightness(0.9);
    }
  }
  .botoa-sair-nav{
    @media screen and (max-width: 675px) {
      background-color: red;
      display: flex;
      margin-top: 3rem;
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
  @media screen and (max-width: 675px) {
    display: ${(props) => (props.isOpen ? "none" : "")};
    }

  .logo-topo {
    /* min-height: 2.5rem;
    width: 15.5rem; */

    img {
      display: flex;
      justify-content: center;
      height: 2.5rem;
      width: 100%;
    }
  }
  @media screen and (max-width: 675px) {
    .logo-topo {
      /* width: 0; */
      display: none;
    }
    /* .sc-hZpJaK .hMKvHM{
      background-color: blue;
    } */
    
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
interface propsContainer {
  isOpen: boolean;
}
export const Container = styled.div<propsContainer>`
  display: block;

  .alan-logo{
  border-bottom: 1px solid rgb(118,118,118, .4);
  padding:1rem;
  display: ${(props) => (props.isOpen ? "none" : "none")};
  @media screen and (max-width: 675px) {
    display: block;
  }
}

  .MuiDrawer-paper {
    @media screen and (max-width: 675px) {
      display: ${(props) => (props.isOpen ? "" : "none")};
      width: ${(props) => (props.isOpen ? "100%" : "")};
      position: fixed;
      overflow-y:${(props) => (props.isOpen ? "hidden" : "hidden")};
      z-index: 1;
      height: 100vh;
      /* background-color: ${(props) => (props.isOpen ? "red" : "blue")};  */
      /* margin-left:${(props) => (props.isOpen ? "0" : "2rem")}; */
      /* background-color: transparent; */
      /* background-color: red ; */

      .makeStyles-toolbar-9{
      z-index: 2;
    }
  }
    .makeStyles-toolbar-9{
      
      /* position: fixed; */
      border-bottom: 1px solid rgb(118,118,118, .4);
     
  }
  
`;
