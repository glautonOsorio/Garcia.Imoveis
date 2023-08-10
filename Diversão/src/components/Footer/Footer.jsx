import React from "react";
import * as Styled from "./Footer.style";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <React.Fragment>
      <Styled.FooterContainer>
        <Styled.FooterRow>
          <div className="firstMenu">
            <Styled.FooterTittle>Garcia.Moveis</Styled.FooterTittle>
          </div>

          <Styled.FooterList>
            <Styled.FooterTittle>Paginas Criadas</Styled.FooterTittle>
            <Styled.FooterLnk to={"/produtos"}>
              Pagina de Produtos
            </Styled.FooterLnk>

            <Styled.FooterLnk to={"/contact"}>
              Pagina do Carrinho
            </Styled.FooterLnk>

            <Styled.FooterLnk to={"/faq"}>Pagina de Checkout</Styled.FooterLnk>
          </Styled.FooterList>
        </Styled.FooterRow>
        <span className="footerSpan">
          Garcia.Moveis@ Alguns direitos reservados.
        </span>
      </Styled.FooterContainer>
    </React.Fragment>
  );
};

export default Footer;
