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
    justify-content: space-around;
    /* background-color: red; */
    /* justify-content: space-around; */
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
            font-size: 1.5rem;
            :last-child{
                font-size: 2rem;
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
            font-size: 1.5rem;
            :last-child{
                font-size: 2rem;
                color: lightgreen;
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
            font-weight: 550;
            font-size: 1.5rem;
            :last-child{
                font-size: 2rem;
                color: #F24447;
            }
        }
    }
    .bolinha{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 4.5rem;
        height: 4.5rem;
        border-radius: 50%;
        background-color: #1A6462;
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
export const DadosConteudo = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .statusNota{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 32rem;
    }

`;
export const NotaProva = styled.div`
    height: 12rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: purple; */
    border-radius: 0.25rem 0 0 0.25rem;
    span{
        padding: 1rem;
        font-size: 1.6rem;
        font-weight: 450;
    }
    .nota{
        font-size: 1.9rem;
        color: lightgreen;

    }

`;
export const Status = styled.div`
    height: 12rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0 0.25rem 0.25rem 0;
    span{
        font-size: 1.6rem;
        font-weight: 450;
        margin-bottom: 0.5rem;

    }
    .situacao{
        font-size: 1.9rem;
        color: #31A368;
        font-weight: bold;
    }

`;
export const QuestoesCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* margin-left: -14rem; */
    /* background-color: blue; */

`;
