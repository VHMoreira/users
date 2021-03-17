import styled from 'styled-components';

export const UsersContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 100%;
`;

export const Pagination = styled.section`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    max-width: 100%;
    padding: 10px;
    font-weight: 700;
`;

export const PaginationButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin: 0 10px;
    background-color: transparent;
    border: 1px solid #0a0442;

    &:hover{
        background-color: #0053fb;
    }

    svg{
        color: white;
    }
`;