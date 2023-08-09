import styled from "styled-components";

export const StyledCardProduto = styled.div`
  display: flex;
  flex-direction: column;
  width: 24%;
  height: 400px;
  padding: 5px;
  background-color: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 9px;
  margin: 0 2px 15px 2px;

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
    max-height: 100%;
    max-width: 100%;
    object-fit: cover;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    word-break: break-word;
    margin-bottom: 5px;
    font-size: 1rem;
    flex: 0 1 auto;
  }

  .price {
    display: flex;
    padding: 3px;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: default;
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
  padding: 10px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  border: none;
  border-radius: 9px;
  background-color: #3c4855;
  color: white;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #515961;
  }
`;