import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  font-family: "Times New Roman";
  width: 100%;
  background-color: #00121c;
  color: #fff;
  gap: 1rem;
`;

export const FooterRow = styled.section`
  display: flex;
  flex-direction: row;
  margin: 1rem;
  justify-content: space-between;
`;

export const FooterImage = styled.img`
  width: 18rem;
  margin: 1rem;
`;

export const FooterTittle = styled.h4`
  font-size: 2rem;
`;

export const FooterList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 1rem;
`;

export const FooterLnk = styled(Link)`
  text-decoration: none !important;
  list-style-type: none;
  font-size: 1rem;
  color: #f8f8ff;
`;
