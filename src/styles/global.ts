import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    .content{
         display: flex;
         background-color:whitesmoke;
         /* padding: 1.5rem; */
         border-radius:0.24rem;
         margin-left: 0.26rem; 

         min-height: 30rem;
         width: 90%;
         @media screen and (max-width: 675px) {
            margin-left: 0rem;
            margin-top: 0rem;
        }
    }
    .overlay{
        background: rgba(0,0,0,0.5);
        position:fixed;
        display: flex;
        top:0;
        bottom: 0;
        left:0;
        right:0;
        align-items:center;
        justify-content:center;
        min-height:100vh;
        overflow-y:hidden;
        margin-left: 4.7rem;
        
        margin-top: 4rem;

        @media screen and (max-width: 675px) {
            margin-left: 0rem;
            margin-top: 0rem;
        }
    }

    *{
        font-family: 'Roboto', sans-serif;
        
    }
    html{
        width: 100%;
        height: 100vh;
        /* background-color: #369A99; */
        background-color: #F0E8F5;
    }
    body{
        margin: 0;
        background-color: #F0E8F5;
    }
    .start-test-overlay{
        background: rgba(0, 0 ,0 , 0.5);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9000;
        overflow-y: scroll;
    }
    .start-test-content{
        position: relative;
        background-color: whitesmoke;
        width: 93%;
        max-width: 35rem;
        border-radius: 0.25rem;
        padding: 1rem 2rem;
        transition: 1s;
        text-align: justify;
    }
    .start-test-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        transition: filter 0.2s;
        &:hover {
            filter: brightness(0.8);
         }
    }
    .ReactModal__Body--open {
        overflow: hidden;
    }

`;
