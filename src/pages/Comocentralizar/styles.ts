import styled from 'styled-components';

export const Container = styled.div`
    background-color: #e2e2e2;
    margin: 0;
    padding: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

    form{
        border-radius: .5rem;
        box-shadow: 0px 0px 20px rgba(0,0,0,0.1);
        background-color: #fff;
        max-width: 450px;
        width: 100%;
        min-height: 400px;
        display:flex;
        align-items: center;
        justify-content: center;
    }
`;
