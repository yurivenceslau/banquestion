import styled from "styled-components"
import logoAlan from "../../imagens/logoAlan.png"

export const Container = styled.div`
    color: white;
    display: flex;
    flex: 2.5;
    min-height: 100vh;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin: auto;
    background-color: white;
    
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
            width: 90%;
            height: auto;
        }
    }
    @media screen and (max-width: 300px) {
        width: 19.1rem;
    }
`
export const Content = styled.div`
    /* background-color: #1A6462; */
    border-radius: 0.5rem;
    box-shadow: 0px 0px 20px rgba(0,0,0,0.1);
    max-width: 43rem;
    width: 100%;
    min-height: 37rem;
    display: flex;
    /* background-color: #f5f5f5; */
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .MuiOutlinedInput-multiline{
        background-color: #e2e2e2;
        width: 37.9rem;
        margin:auto;
        textarea{
            margin: auto;
            align-self: center;
        }
    }
    .MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-fullWidth.MuiInputBase-formControl{
        width: 37.9rem;
    }
    span{
        color: black;
        margin-bottom: 1rem;
    }
    input{
        background-color: #e2e2e2;
        border: 0;
        height: 1rem;
        max-width: 37.9rem;
        width: 90%;
        border-radius: 0.25rem;
    }
    .MuiInputBase-input.MuiOutlinedInput-input{
        width: 100%;
    }
    .MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-fullWidth.MuiInputBase-formControl{
        max-width: 37.9rem;
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

    .comps{
        width: 100%;
    }
    .comp{
        width: 100%;
    }

    @media screen and (max-width: 300px) {
        button{
            padding: 0;
            width: 17.5rem;
        }
        .MuiOutlinedInput-root{
            width: 18rem;
        }
        .MuiOutlinedInput-multiline{
            margin: 0;
        }
        .MuiInputBase-input.MuiOutlinedInput-input{
            width: 5rem;
        }
        .MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-fullWidth.MuiInputBase-formControl{
            max-width: 18rem;
        }
    }

    @media screen and (max-width: 995px) {
        width: 20%;
        box-shadow: 0px 0px 0px transparent;

        input{
           width: 50%;
           font-size: 1.2rem;
           height: 1.8rem;
        }

        label{
           font-size: 1.3rem;
        }

        button{
           font-size: 1rem;
           height: 3.5rem;
        }
        .comps{
           width: auto;
            margin: auto;
            display: flex;
            flex-direction: column;
        }
        .comp{
            width: auto;
            margin: auto;
        }
        .makeStyles-root-12{
           margin-left: 10rem;
        }
        .MuiOutlinedInput-multiline{
            width: 100%;
            min-height: 4.2rem;
        }
        .MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-fullWidth.MuiInputBase-formControl{
            width: 100%;
            min-height: 4.2rem;
        }
        .MuiSelect-root.MuiSelect-select.MuiSelect-selectMenu.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input{
            min-height: 1.8rem;
            display: flex;
            align-items: center;
        }
        .MuiInputLabel-outlined.MuiInputLabel-shrink{
            transform: translate(14px, -6px) scale(0.6)
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
    @media screen and (max-width: 300px) {
        width: 18rem;
    }

`
export const Alinhador = styled.div`
    display: flex;
    flex-direction: row;

    span{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;