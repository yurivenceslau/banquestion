import styled from "styled-components"
import backAlan from "../../imagens/backAlan.jpg"

export const Container = styled.div`
    width: 100%;
    z-index: 0;
    height: 100vh;
    flex: 1.5;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* background-image: linear-gradient(to left top, #1A6462, #059E75); */
    background-image: url(${backAlan});
    background-size: cover;
    color: black;
    

    h1{
        font-size: 2.53rem;
        margin: 0.3rem;
        z-index: 2;
    }
    
`;

export const Corzinha = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: green;


`