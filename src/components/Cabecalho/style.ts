import styled from "styled-components"

export const Container = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    button{
        background-color: whitesmoke;
        border: 0;
        height: 3rem;
        border-radius: 0.25rem 0.25rem 0 0;
        width: 8rem;
        cursor: pointer;
        transition: filter 0.2s;

        :hover{
            filter: brightness(0.9);
        }
    }
    
    div{
        display: grid ;
        grid-template-columns: 1fr 1fr;
        gap: 0.5rem;

    }
`;