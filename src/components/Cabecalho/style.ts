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
    color: white;
    
    
`

export const Corzinha = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(to bottom right, #1A6462, transparent);
    height: 100vh;
    width: 100%;
    flex-direction: column;
    text-shadow: 0px 0px 20px rgba(12,12,14,20);
    
    h1{
        font-size: 2.24rem;
        margin: 0.3rem;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;
    }


`;

