import styled from 'styled-components';

export const TitleContainer = styled.section`
    width: 100%;
    display: flex;
    align-items: center;

    a{
        margin-right: 10px;
        font-weight: 700;
        font-size: 20px;
        border-bottom: 3px solid  #0053fb;
        height: 100%;
    }

    @media(max-width: 600px){
        margin: 10px 0;
        justify-content: center;
    }
`;