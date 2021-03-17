import styled from 'styled-components';

export const Item = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 100%;
    height: 70px;
    padding: 10px;
    background-color: #0a0442;

    &+section{
        margin-top: 15px;
    }
`;

export const Avatar = styled.img`
    border-radius: 50%;
    height: 100%;
`;

export const Info = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
`;

export const InfoName = styled.span`
    font-weight: 600;
    font-size: 1.2rem;
`;

export const InfoCell = styled.span`
    font-size: 1rem;
    font-weight: 600;
    color: rgb(131, 131, 131);
`;
