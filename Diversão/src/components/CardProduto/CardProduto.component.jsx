/* eslint-disable react/prop-types */
import React from "react";

import { useContext } from "react";
import { StyledCardProduto, AddToCartButton } from "./CardProduto.styled";
import AppContext from "../../contexts/AppContext";

import { Link, useNavigate } from "react-router-dom";

const CardProduto = ({ item }) => {
  const { setCartItems } = useContext(AppContext);

  // Função para adicionar o item ao carrinho
  const navigate = useNavigate();
  const adicionarAoCarrinho = () => {
    // Construindo o objeto do novo item do carrinho
    const novoItemCarrinho = {
      produto_id: item.id,
      nome: item.nome,
      moeda: item.moeda,
      preço: item.preço,
      imagem: item.imagem,
    };

    // Fazendo uma requisição POST para adicionar o item ao carrinho
    fetch("http://localhost:3000/carrinho", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novoItemCarrinho),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Item adicionado ao carrinho:", data);
        setCartItems(data);
        // Atualizar o estado do carrinho automaticamente aqui

        //** talvez vamos ter que criar um context ou deixar a função no app.jsx que encapsula tudo
      })
      .catch((error) => {
        console.error("Erro ao adicionar item ao carrinho:", error);
      });
    navigate("/carrinho");
  };

  return (
    <StyledCardProduto>
      <div className="corner-badge">#{item.id}</div>
      <div className="container">
        {/* Exibição do nome */}
        <span className="title">{item.nome}</span>
        {/* Exibição da imagem */}
        <div className="image-container">
          <img src={item.imagem} alt={item.nome} loading="lazy" />
        </div>
        {/* Exibição do preço */}
        <div className="price-and-button">
          <span className="price">
            <span className="price-tittle">preço:</span>
            {item.preço}
          </span>
          <AddToCartButton className="bt" onClick={adicionarAoCarrinho}>
            Adicionar ao Carrinho
          </AddToCartButton>
        </div>
      </div>
    </StyledCardProduto>
  );
};

export default CardProduto;
