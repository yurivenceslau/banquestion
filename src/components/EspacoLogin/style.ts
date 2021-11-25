import styled from "styled-components"

export const Container = styled.div`
    color: #fffdfe;
    display: flex;
    flex-direction: column;
    width: 30rem;
    align-items: center;
    justify-content: center;
    margin: auto;
    padding: 1rem 0;
    min-height: 65.5vh;

`
export const Content = styled.form`
    background-color: #1A6462;
    border-radius: 0.5rem;
    box-shadow: 0px 0px 20px rgba(0,0,0,0.1);
    max-width: 350px;
    width: 100%;
    min-height: 300px;
    display: flex;
    background-color: #1a6462;
    border: 0.1px solid black;
    /* background-color: #f5f5f5; */
    
    flex-direction: column;
    align-items: center;
    justify-content: center;
    input{
        margin-bottom: 0.7rem;
        background-color: white;
        border: 0;
        height: 2.2rem;
        width: 14rem;
        border-radius: 0.25rem;
        text-align: center;
    }
    button{
        background-color: white;
        border: 0;
        border-radius: 0.25rem;
        height: 2.2rem;
        width: 10rem;
        margin-bottom: 0.7rem;
        cursor: pointer;
        transition: filter 0.2s;

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


`
export const Info = styled.h1`
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;
    align-items: center;
    font-size: 1rem;
    font-weight: 500;

    span{
        font-size: 1.3rem;
        margin-top: -1rem;
    }

`