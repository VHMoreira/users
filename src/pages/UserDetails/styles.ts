import styled from 'styled-components';

export const UserDetailContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    padding: 20px 5px;
`;

export const Tabs = styled.nav`
    margin-top: 20px;
    width: 100%;
    max-height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 20px 0;
    border-bottom: 1px solid rgb(43, 43, 43);
`;

export const TabButton = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    height: 100%;
    flex: 1;
    margin: 3px;
    padding: 10px;
    background-color: transparent;
    color: gray;
    cursor: pointer;

    svg{
        margin-right: 10px;
    }
`;