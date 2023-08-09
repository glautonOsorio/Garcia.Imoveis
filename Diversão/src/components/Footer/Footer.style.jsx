import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  font-family: "Times New Roman";
  width: 100%;
  background-image: linear-gradient(to top, #232f3e 80%, #131a22);
  color: #ffebc7;
  gap: 1rem;
`;

export const FooterRow = styled.section`
  display: flex;
  flex-direction: row;
  margin: 1rem;
  justify-content: space-between;
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
  color: #ffebc7;
`;
