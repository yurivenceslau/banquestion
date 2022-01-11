import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    box-shadow: 3px 3px 16px 6px #aaa;
    background-color: whitesmoke;
    border-radius: 0.7rem;
    margin-top: 2.2rem;
    margin-bottom: 2.2rem;

    @media screen and (max-width:675px){
        width: 100%; 
    
    }
`;
export const TituloResultado = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #1A6462;
    min-height: 5rem;
    border-radius: 0.7rem 0.7rem 0 0;
    h1{
        margin-left: 2rem;
        font-size: 2.1rem;
        color: white;
    }
`;
export const QuestoesEstatisticas = styled.div`
    width: 100%;
    display: flex;
    .card_questoes{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 1;
        /* background-color: blue; */
        height: 13rem;
        border: 1px solid #000;

        span{
            font-weight: 550;
            font-size: 1.5rem;
            color: black;
            :first-child{
                margin-bottom: 1rem;
            }
        }
        .certas{
            color: green;
        }
        .erradas{
            color: red;
        }
    }

`;
export const QuestoesPorcento = styled.div`
    width: 27%;
    background-color: brown;
    display: flex;
    justify-content: center;
`;
