import styled from 'styled-components';

export const ProductsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const ProductInfoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: red;
    height: 150px;
    width: 600px;
    margin-bottom: 20px;
    border-radius: 10px;
`

export const ProductImageWrapper = styled.div`
    height: 100%;
    width: 50%;
    background-color: yellow;
    border-radius: 10px 0 0 10px;
    img {
        height: 100%;
        width: 100%;
        border-radius: 10px 0 0 10px;
    }
`

export const ProductFeaturesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-right: 5px;
`