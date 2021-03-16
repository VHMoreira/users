import styled from "styled-components";

export const HeaderContainer = styled.header`
    max-width: 100%;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 40px;

    img{
        height: 70px;
        width: 70px;
        margin-right: 20px;
    }

    @media(max-width: 600px){
        max-width: 100%;
        display: flex;
        height: auto;
        flex-direction: column;
        align-items: center;
        padding: 20px 40px;

        img {
            margin-right: 0;
        }
    }
`;