import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 22rem;
    border-radius: 0 0 0.5rem 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TituloContato = styled.div`
    margin-top: 2rem;
    font-size: 1.4rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border-bottom: 1px solid #000; */

    h1{
        margin: 0;
    }
    @media screen and (max-width: 675px) {
        h1{
            font-size: 2.4rem;
        }
    }
`;
export const EspacoContato = styled.div`
    display: flex;
    justify-content: space-around;
    width: 95%;
    min-height: 13rem;
    margin-top: 2rem;

    @media screen and (max-width: 675px){
        flex-direction: column;
        align-items: center;
    }
`;

export const CardContato = styled.a`
    width: 12rem;
    height: 11rem;
    cursor: pointer;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 0;
    border: 1px solid #ccc;
    text-decoration: none;
    color: #000;
    transition: 0.4s;
    margin-bottom: 1.5rem;
    
    :hover{
        width: 13rem;
        height: 12rem;
    }

    img{
        width: 6rem;
        height: 6rem;
    }
    span{
        margin-top: 1rem;
    }

`; 