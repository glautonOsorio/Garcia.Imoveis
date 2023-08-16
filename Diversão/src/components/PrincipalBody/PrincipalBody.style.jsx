import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  width: 100%;
  gap: 5rem;
`;
export const MainTitle = styled.h1`
  font-size: 8rem;
  color: #de8705;
  margin: 1rem;
`;
export const MainCard = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #00008b;
  margin: 1rem;
  box-shadow: 0.2rem 0.2rem 0.2rem #485769;
`;
export const CardImage = styled.img`
  width: 40rem;
`;

export const MainCardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  gap: 2rem;
  font-size: 2rem;
  padding: 1rem;
  color: #fff;
`;

export const CardButton = styled.button`
  width: 12rem;
  height: 4rem;
  font-size: 1.2rem;
  color: whitesmoke;
  background-color: #de8705;
  color: black;
  border-color: black;
  border-radius: 0.5rem;
  margin-left: 30rem;
  cursor: pointer;
  &:hover {
    background-color: #ffd700;
  }
`;

export const MainCardTitle = styled.h2`
  display: flex;
  justify-items: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 2.5rem;
`;

export const MainCardSpecialText = styled.p`
  font-size: 4rem;
  color: #ffd700;
`;
export const MainCardTextRow = styled.span`
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
`;
export const MainFooter = styled.div`
  background-color: #ffffff;
  box-shadow: 0.2rem 0.2rem 0.2rem #485769;
  margin-bottom: 4rem;
  cursor: pointer;
`;
export const MainFooterTitle = styled.h3`
  font-size: 4rem;
  color: #de8705;
`;
export const MainProductRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 80rem;
  height: 12rem;
  overflow-x: scroll;
  margin: 1rem;
`;

export const ProductImages = styled.img`
  width: 8rem;
  margin: 1rem;
`;
