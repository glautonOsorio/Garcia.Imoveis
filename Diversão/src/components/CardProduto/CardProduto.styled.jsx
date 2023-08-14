import styled from "styled-components";

export const StyledCardProduto = styled.div`
  display: flex;
  flex-direction: column;
  width: 24%;
  height:100%;
  background-color: #ffffff;
  border: none;
  margin: 0 2px 15px 2px;
  position: relative;

  .container {
    display: flex;
    flex-direction: column;
    padding: 20px;
    justify-content: space-between; /* Adicione esta linha */
  }

  .price-and-button {
    display: flex;
    flex-direction: column; 
    align-items: flex-end; 
    gap: 10px;
    width: 100%;
  }

  .image-container {
    min-height: 65%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
    flex: 1 1 auto;
  }

  div > img {
    max-height: 90%;
    max-width: 90%;
    object-fit: cover;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    word-break: break-word;
    padding-left: 25px;
    margin-bottom: 5px;
    font-size: 1rem;
    flex: 0 1 auto;
  }

  .price {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-right:5px;
    font-size: 1.1rem;
    font-weight: 500;
    cursor: default;
  }

  .price-tittle {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right:5px;
    text-align: center;
    font-size: 0.8rem;
    font-weight: 500;
    color: #8b8b8b;
  }

  .corner-badge {
    position: absolute;
    background-color: #FFA500;
    color: white;
    padding: 8px 12px;
    border-radius: 0 0 15px 0;
  }


  @media (max-width: 1000px) {
    & {
      width: 31%;
    }

    .image-container {
      min-height: 30%;
      flex-shrink: 1;
    }
  }

  @media (max-width: 620px) {
    width: 170px;
    height: 300px;
  }
`;

export const AddToCartButton = styled.button`
  width: 140px; /* Largura fixa do botão */

  padding: 10px;
  font-size: 1rem;
  font-size: 0.75rem;
  cursor: pointer;
  border: none;
  border-radius: 50px;
  background-color: #ffc500;
  color: black;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e3b000;
  }
`;