import React from "react";
import { StyledCardProduto } from "./CardProduto.styled";
import { Link } from "react-router-dom";


const CardProduto = ({ item }) => {
  return (
    <StyledCardProduto>
      <div className="image-container">
        <img src={item.imagem} alt={item.nome} loading="lazy" />
      </div>
      <p className="title"><Link to={`/shop/${item.id}`}> {item.nome}</Link></p>
      <p className="price">${item.preço}</p>
      </StyledCardProduto>
  );
};

export default CardProduto;
