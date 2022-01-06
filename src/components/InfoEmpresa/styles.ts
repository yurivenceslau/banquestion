import styled from 'styled-components';

export const Container = styled.div`
    width: 90%;
    margin-top: 2.2rem;
    margin-bottom: 2.2rem;
    box-shadow: 3px 3px 16px 4px #aaa;
    background-color: whitesmoke;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const TituloSobre = styled.div`
    /* border-bottom: 1px solid #000; */
    width: 100%;
    border-radius: 0.5rem 0.5rem 0 0;
    background-color: #1A6462;

    h1{
        margin-left: 2rem;
        font-size: 2.1rem;
        color: white;
    }

`;

export const TituloGeral = styled.div`
    margin-top: 3rem;
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

export const Descricao = styled.div`
    width: 85%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    flex-direction: row;
    .desc_img{
        margin-right: 1rem;
        img{
            width: 16rem;
            height: 16rem;
        }
    }
    .desc_texto{
        width: 100%;
        display: flex;
        flex-direction: column;
        span{
            font-size: 1.0rem;
            text-align: justify;
            :first-child{
                margin-bottom: 1rem;
            }
        }
    }
    @media screen and (max-width: 675px) {
        flex-direction: column;
        .desc_img{
            margin-right: 0;
        }
        .desc_texto{
            margin-bottom: 1.5rem;
        }
    }

`;
