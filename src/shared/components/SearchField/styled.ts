import styled from 'styled-components';

export const InputContainer = styled.div`
    background-color: white;
    display: flex;
    flex-direction: row;
    border-radius: 5px;
    padding: 5px;
    border: 3px solid white;

    &:focus-within{
        border: 3px solid #0053fb;
    }

    svg{
        color: #0053fb;
        padding: 3px;
    }
`;

export const InputField = styled.input`
    border: 0;
    outline: 0;
`;