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
    background-color: firebrick;
    min-height: 75.7vh;

`
export const Content = styled.form`
    border-radius: 0.5rem;
    box-shadow: 0px 0px 20px rgba(0,0,0,0.1);
    max-width: 450px;
    width: 100%;
    min-height: 400px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    input{
        margin-bottom: 0.7rem;
        background-color: white;
        border: 0;
        height: 2.2rem;
        width: 20rem;
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
export const Info = styled.span`
    display: flex;
    flex-direction: row;
    margin-bottom: 0.7rem;
    align-items: center;
    font-size: 0.83rem;
    font-weight: 510;

`