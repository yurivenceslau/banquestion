import styled from 'styled-components';

export const Container = styled.div`
    margin: 0;
    display: flex;
    flex-direction: row;
    min-height: 100vh;

    @media screen and (max-width: 675px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        min-height: 100vh;
    } 
`;
