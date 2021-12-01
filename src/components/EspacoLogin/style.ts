import styled from "styled-components"
import logoAlan from "../../imagens/logoAlan.png"

export const Container = styled.div`
    color: white;
    display: flex;
    flex: 2.5;
    min-height: 100vh;
    flex-direction: column;
    width: 30rem;
    align-items: center;
    justify-content: center;
    margin: auto;
    
    img{
        margin-bottom: 2rem;
        width: 21rem;
        min-height: 4rem;
    }

    @media screen and (max-width: 675px) {
        display: flex;
        flex-direction: column;
        width: 100vw;
        min-height: 100vh;

        img{    
            width:90%;
            height: auto;
        }
    }
`
export const Content = styled.form`
    /* background-color: #1A6462; */
    border-radius: 0.5rem;
    box-shadow: 0px 0px 20px rgba(0,0,0,0.1);
    max-width: 430px;
    width: 100%;
    min-height: 400px;
    display: flex;
    /* background-color: #f5f5f5; */
    flex-direction: column;
    align-items: center;
    justify-content: center;
    input{
        margin-bottom: 0.7rem;
        background-color: #e2e2e2;
        border: 0;
        height: 2.2rem;
        width: 19rem;
        text-align: center;
        border-radius: 0.25rem;
    }
    button{
        background-color: white;
        border: 0;
        border-radius: 25rem;
        height: 2.2rem;
        width: 19rem;
        margin-top: 1.2rem;
        cursor: pointer;
        color: white;
        transition: filter 0.2s;
        background-image: linear-gradient(to left top, #1A6462, #059E75);

        :hover{
            filter: brightness(0.9);
        }
    }
    a{
        margin: 0.5rem;
        font-size: 0.83rem;
        color: white;
        font-weight: 510;
    }

    @media screen and (max-width: 675px) {
        width: 100%;
       box-shadow: 0px 0px 0px transparent;

       input{
           width: 90%;
           font-size: 1.2rem;
           height: 3rem;
       }

        button{
            font-size: 1rem;
            height: 3.5rem;
        }
    }


`


export const Info = styled.h1`
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;
    align-items: center;
    font-size: 1rem;
    font-weight: 500;

    span{
        font-size: 1.8rem;
        margin-top: -1rem;
        color: #1A6462;
    }
    @media screen and (max-width: 675px) {
        span{
            font-size: 1.2rem;
        }
    }

`
export const Contatos = styled.div`
    color: #1A6462;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1.5rem;
    border-top: 0.1px solid rgba(0, 0, 0, 0.4);
    width: 19rem;


    strong{
        font-weight: 550;
        margin-top: 1.5rem;
        font-size: 1rem;
    }
    a{
        color: #1A6462;
        font-size: 0.9rem;
    }

`