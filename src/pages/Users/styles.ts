import styled from 'styled-components';

export const UsersContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 100%;
`;

export const Filters = styled.section`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    font-weight: 600;
    margin: 20px 0;

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 10px;
        background-color: #0053fb;
        color: white;
        border-radius: 5px;
        padding: 5px;
        border: 3px solid #0053fb;

        &:hover{
            background-color: #0a0442;
        }
    }

    @media(max-width: 825px){
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;

        button{
            margin-top: 10px;
        }
    }
`;

export const FilterField = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-weight: 600;

    &{
        margin-left: 25px;
    }

    section{
        display: flex;
        margin-top: 10px;

        input{
            border: 0;
            outline: 0;
            border-radius: 5px;
            padding: 5px;
            border: 3px solid white;

            &:focus-within{
                border: 3px solid #0053fb;
            }

            & + input{
                margin-left: 10px;
            }
        }
    }

    @media(max-width: 825px){
        margin-top: 10px;

        &{
            margin-left: 0px;
        }
    }
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