import styled from 'styled-components';

export const ProductsWrapper = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
    background-color: #dfdfdf;
    border-radius: 10px;
    padding: 50px;
`

export const ProductWrapper = styled.div`
    display: flex;
    margin-bottom: 10px;
    img{
        width: 300px;
        height: 200px;
        border-radius: 10px 0 0 10px;
    }
    border: 1px solid #000;
    border-radius: 10px;
    padding: 10px;
`

export const ProductFeaturesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-left: 1px solid #000;
    h2 {
        margin-left: 10px;
    }
`