import styled from 'styled-components';

export const ProfileContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 900px;
`;

export const ProfileAvatar = styled.img`
    max-width: 200px;
    border-radius: 50%;
`;

export const ProfileName = styled.span`
    margin-top: 20px;
    font-weight: 700;
    font-size: 2rem;
    border-bottom: 3px solid #0053fb;
`;

export const ProfileStats = styled.section`
    margin-top: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const StatsNumber = styled.span`
    font-weight: 700;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    svg{
        color: #0053fb;
        margin-right: 10px;
    }
`;