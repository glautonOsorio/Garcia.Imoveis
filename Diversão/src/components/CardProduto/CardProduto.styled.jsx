import styled from "styled-components";

export const StyledCardProduto = styled.div`
  display: flex;
  flex-direction: column;
  width: 24%;
  height: 400px;
  padding: 5px;
  background-color: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
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
    cursor: pointer;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    word-break: break-word;
    margin-bottom: 5px;
    flex: 0 1 auto;
  }

  .title > a {
    text-decoration: none;
    color: black;
  }

  .title:hover {
    text-decoration: underline;
  }

  .price {
    font-weight: bold;
    cursor: default;
  }

  .rating {
    display: flex;
    align-items: center;
    cursor: default;
  }

  .rating > svg {
    margin-left: 3px;
    color: orange;
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