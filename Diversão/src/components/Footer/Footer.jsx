import React from "react";
import logo from "../../assets/logo-garcia.png";
import React from "react";

import * as Styled from "./Footer.style";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };
  return (
    <React.Fragment>
      <Styled.FooterContainer>
        <Styled.FooterRow>
          <div className="firstMenu">
            <Styled.FooterImage
              src={logo}
              alt="Logotipo"
              onClick={navigateHome}
            />
          </div>

          <Styled.FooterList>
            <Styled.FooterTittle>Paginas Criadas</Styled.FooterTittle>
            <Styled.FooterLnk to={"/produtos"}>
              Pagina de Produtos
            </Styled.FooterLnk>

            <Styled.FooterLnk to={"/carrinho"}>
              Pagina do Carrinho
            </Styled.FooterLnk>

            <Styled.FooterLnk to={"/chekout"}>
              Pagina de Checkout
            </Styled.FooterLnk>
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
