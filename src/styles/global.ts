import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    .content{
         display: flex;
         background-color:whitesmoke;
         /* padding: 1.5rem; */
         border-radius:0.4rem;
         margin-left: 6rem; 
         position: relative;
         min-height: 30rem;
         margin-bottom:-2.1rem ;
         justify-content:center;
         align-items:center;
         width: 50%;
         /* overflow-y: scroll; */

        /* transition: 1s; */
         /* margin-left: 10rem;
         margin-right: 10rem;
        margin-top: 4rem; */
        @media screen and (max-width: 675px) {
            width: 99%;
            margin-left: 0rem;
            margin-top: 27.8rem;
        }
        @media screen and (max-width: 320px) {
            margin-left: 0rem;
            margin-top: 33rem;
            width: 99%;
        }
        @media screen and (min-width: 768px) and (max-width: 1024px) {
            margin-left: 5rem;
            margin-top: 2rem;
            width: 76.2%;

        }
        @media screen and (min-width: 1280px) and (max-width: 1280px) {
            margin-left: 5rem;
            margin-top: 2rem;
            width: 75%;

        }
        @media screen and (min-width: 667px) and (max-width: 667px) {
            /* margin-left: 5rem; */
            margin-top: 45rem;
            width: 55%;
        }
        @media screen and (min-width: 740PX) and (max-width: 740PX) {
            margin-left: 5rem;
            margin-top: 50rem;
            width: 50%;
        }
        @media screen and (min-width: 844px) and (max-width: 896px) {
            margin-left: 5rem;
            margin-top: 18rem;
            width: 84%;
        }
        @media screen and (min-width: 914px) and (max-width: 915px) {
            margin-left: 5rem;
            margin-top: 18rem;
            width: 84%;
        }
        @media screen and (min-width: 912px) and (max-width: 912px) {
            margin-left: 5rem;
            /* margin-top: 18rem; */
            width: 82%;
        }
        @media screen and (min-width: 1368px) and (max-width: 1368px) {
            margin-left: 5rem;
            /* margin-top: 18rem; */
            width: 55%;
        }
        @media screen and (min-width: 720PX) and (max-width: 720px) {
            margin-left: 5rem;
            margin-top: 35rem;
            width: 50%;
        }
        @media screen and (min-width: 1180px) and (max-width: 1180px) {
            margin-left: 5rem;
            margin-top: 6rem;
            width: 78%;
        }
        @media screen and (min-width: 1180px) and (max-width: 1180px) {
            margin-left: 5rem;
            margin-top: 6rem;
            width: 78%;
        }
        @media screen and (min-width:  540px) and (max-width:  540px) {
            margin-left: 0rem;
            margin-top: 28rem;
            width: 68%;
        }
        @media screen and (min-width:   414px) and (max-width:   414px) {
            margin-left: 0rem;
            margin-top: 28rem;
            width: 90%;
        }
        @media screen and (min-width:  692px) and (max-width:   692px) {
            margin-left: 5rem;
            margin-top: 48rem;
            width: 53%;
        }
        @media screen and (min-width:  725px) and (max-width:   725px) {
            margin-left: 5rem;
            margin-top: 48rem;
            width: 50%;
        }
        
        @media screen and (min-width:  653px) and (max-width:  653px) {
            margin-left: 0rem;
            margin-top: 48rem;
            width: 56%;
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
        z-index:9000;
        align-items:center;
        justify-content:center;
        min-height:100vh;
        overflow-y: scroll;
        /* margin-left: 4.7rem;
        
        margin-top: 4rem; */

        @media screen and (max-width: 675px) {
            margin-left: 0rem;
            margin-top: 0rem;
        }

        @media screen and (max-height: 675px) {
            margin-left: 0rem;
            padding-bottom: 0rem;

            /* padding-top: 30rem; */
            width: 100%;

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
