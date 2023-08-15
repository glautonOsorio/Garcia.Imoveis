import styled from 'styled-components';

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 20px;
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    background-color: yellow;
    border: none;
    padding: 20px;
    border-radius: 10px;

    &:hover{
    background-color:#d6d30ec5;
   }
`