import styled from "styled-components";

export const CarrinhoContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
`;

export const CarrinhoContent = styled.div`
  background-color: #fff;
  width: 50%;
  margin: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0.2rem 0.2rem 0.2rem #485769;
`;

export const CarrinhoTitulo = styled.h1`
  font-size: 4rem;
  color: #de8705;
  text-align: center;
  margin: 1rem;
`;

export const ProductOverflow = styled.div`
  border: 1px solid red;
  margin: 1rem;
  overflow-y: scroll;
  height: 28rem;
`;

export const CarrinhoProductImage = styled.img`
  width: 18%;
`;
export const CarrinhoProductContent = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem;
  justify-content: left;
  gap: 1.5rem;
`;

export const ProductCollum = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 1rem;
  color: #de8705;
`;
