import React from "react";
import { StyledCardProduto, AddToCartButton } from "./CardProduto.styled"; 
import { Link } from "react-router-dom";

const CardProduto = ({ item }) => {

  // Função para adicionar o item ao carrinho
  const adicionarAoCarrinho = () => {

    // Construindo o objeto do novo item do carrinho
    const novoItemCarrinho = {
      produto_id: item.id,
      nome: item.nome,
      preço: item.preço,
      imagem: item.imagem
    };

    // Fazendo uma requisição POST para adicionar o item ao carrinho
    fetch("http://localhost:3000/carrinho", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(novoItemCarrinho)
    })
      .then(response => response.json())
      .then(data => {
        console.log("Item adicionado ao carrinho:", data);
        // Atualizar o estado do carrinho automaticamente aqui 
        //** talvez vamos ter que criar um context ou deixar a função no app.jsx que encapsula tudo
      })
      .catch(error => {
        console.error("Erro ao adicionar item ao carrinho:", error);
      });
  };

  return (
    <StyledCardProduto>
      {/* Exibição da imagem */}
      <div className="image-container">
        <img src={item.imagem} alt={item.nome} loading="lazy" />
      </div>
      {/* Exibição do preço */}
      <p className="price">{item.preço}</p>
      {/* Exibição do nome */}
      <p className="title">{item.nome}</p>
      {/* Botão para adicionar ao carrinho */}
      <AddToCartButton className="bt" onClick={adicionarAoCarrinho}>Adicionar ao Carrinho</AddToCartButton>
    </StyledCardProduto>
  );
};

export default CardProduto;
