import styled from 'styled-components';

export const Container = styled.div`
    margin: 0;
    display: flex;
    flex-direction: row;
    height: 100vh;

    @media screen and (max-width: 800px) {
        display: flex;
        flex-direction: column;
        width: 100%
    } 
`;
