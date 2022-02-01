import { CornerRadius } from 'chart.js/types/geometric';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
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
        font-size: 2.1rem;
        color: white;
    }
`;
export const QuestoesEstatisticas = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: center; */
    /* background-color: red; */
    justify-content: space-around;
    .card_questoes{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 17rem;
        height: 8rem;
        border-radius: 0.25rem;
        span{
            font-weight: 550;
            font-size: 1.3rem;
            color: #444;
            :last-child{
                color: #444;
                font-size: 2rem;
            }
        }
        .bolinha{
            background-color: lightgray;
        }
        @media screen and (max-width: 675px) {
            span{
                font-size: 1.7rem;
            }
        }
    };
    .card_questoesCertas{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 17rem;
        height: 8rem;

        span{
            font-weight: 550;
            color: #444;
            font-size: 1.3rem;
            :last-child{
                font-size: 2rem;
                color: white;
                /* color: lightgreen; */
            }
        }
        .bolinha{
            background-color: #31A368;
        }
        @media screen and (max-width: 675px) {
            span{
                font-size: 1.7rem;
            }
        }
    };
    .card_questoesErradas{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 17rem;
        height: 8rem;

        span{
            color: #444;
            font-weight: 550;
            font-size: 1.3rem;
            :last-child{
                font-size: 2rem;
                color: white;
                /* color: #F24447; */
            }
        }
        .bolinha{
            background-color: #B93437;
        }
        @media screen and (max-width: 675px) {
            span{
                font-size: 1.7rem;
            }
        }
    }
    .bolinha{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 5.5rem;
        height: 5.5rem;
        border-radius: 50%;
        background-color: #1A6462;
        margin-top: 0.5rem;
        @media screen and (max-width: 675px) {
            height: 5.3rem;
            width: 5.3rem;
        }
    }
    .statusNota{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        width: 17rem;
        height: 29rem;
        @media screen and (max-width: 675px) {
            height: 22rem;
        }
        @media screen and (min-width: 765px) and (max-width: 915px) {
            flex-direction: row;
            max-height: 29rem;
            width: 100%;
            height: 100%;
        }
    }
    @media screen and (max-width: 915px) {
        display: flex;
        flex-direction: column;
    }    
`;
export const QuestoesDados = styled.div`
    width: 100%;
    display: flex;
    /* justify-content: center; */
    align-items: center;
`;
export const DadosTitulo = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    h1{
        font-size: 2rem;
    }
`;
interface propsIscor{
    isCor:number;
}
export const NotaProva = styled.div<propsIscor>`
    height: 12rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: purple; */
    border-radius: 0.25rem 0 0 0.25rem;
    span{
        padding: 1rem;
        font-size: 1.3rem;
        font-weight: 450;
        color: #444;
    }
    .nota{
        font-size: 1.9rem;
        color: white;
    }
    .bolinha{
        background-color:${(props) => (props.isCor >=7? "#31A368" : "#B93437")};
        /* background-color: #31A368; */
    }
    

`;

interface propsIscor{
    isCor:number;
}
export const Status = styled.div<propsIscor>`
    /* margin-right: 6rem; */
    height: 12rem;
    display: flex;
    /* background-color:${(props) => (props.isCor >=7? "red" : "blue")}; */

    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0 0.25rem 0.25rem 0;
    span{
        font-size: 1.3rem;
        font-weight: 450;
        color: #444;
        margin-bottom: 0.5rem;
    }
    .situacao{
        font-size: 1.9rem;
        color:${(props) => (props.isCor >=7? "#31A368" : "#B93437")};
        /* color: #31A368; */
        font-weight: bold;
    }
`;
export const QuestoesCard = styled.div`
    display: flex;
    height: 29rem;
    flex-direction: column;
    justify-content: space-around;
    @media screen and (max-width: 675px) {
        margin-bottom: 3rem;
        height: 32rem;
    }
    @media screen and (min-width: 765px) and (max-width: 915px) {
        flex-direction: row;
        width: 100%;
        height: 100%;
        max-height: 29rem;
    }

`;
export const QuestoesGrafico = styled.div`
    display: flex;
    height: 29rem;
    align-items: center;
    justify-content: center;
    canvas{
        margin-top: -2rem;
        @media screen and (max-width: 300px) {
            width: 16rem;
            height: 16rem;
        }
    }
    @media screen and (max-width: 675px) {
        height: 20rem
    }
`;
