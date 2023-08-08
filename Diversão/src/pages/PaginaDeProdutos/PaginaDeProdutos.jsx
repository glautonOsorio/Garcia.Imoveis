import React from "react";
import { useState, useEffect } from "react";
import CardProduto from "../../components/CardProduto/CardProduto.component";
import { StyledContent, StyledProduto } from "./PaginaDeProduto.styled";
import BuscaProduto from "../../components/BuscaProduto/BuscaProduto.component";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const PaginaDeProdutos = () => {
  // Estado para armazenar a lista completa de produtos
  const [items, setItems] = useState([""]);

  // Estado para armazenar o termo de pesquisa
  const [searchTerm, setSearchTerm] = useState("");

  // Estado para armazenar a lista de produtos filtrados
  const [filteredItems, setFilteredItems] = useState([]);

  // Carregar a lista completa de produtos quando o componente montar
  useEffect(() => {
    fetchProdutos();
  }, []);

  // Função para buscar e configurar a lista de produtos
  const fetchProdutos = async () => {
    const response = await fetch("http://localhost:4000/produtos");
    const produtos = await response.json();

    // Configurar a lista completa de produtos e produtos filtrados
    setItems(produtos);
    setFilteredItems(produtos); // Inicialmente, todos os produtos são exibidos
    return produtos;
  };

  // Função para lidar com a busca de produtos
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    // Filtrar os produtos com base no termo de pesquisa
    const filtered = items.filter((item) =>
      item.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Configurar a lista de produtos filtrados
    setFilteredItems(filtered);
  };

  return (
    <>
      <Header /> {/* Componente de cabeçalho */}
      <StyledContent>
        <BuscaProduto searchTerm={searchTerm} onSearchChange={handleSearch} /> {/* Componente de busca */}
      </StyledContent>
      <StyledProduto>
        {/* Verifica se existem produtos filtrados para exibir */}
        {filteredItems.length > 0 ? (
          // Mapeia e renderiza os produtos filtrados
          filteredItems.map((item) => {
            return (
              <CardProduto
                item={item}
                key={item.id} // Define a chave como o ID do produto
              />
            );
          })
        ) : (
          // Caso não haja produtos filtrados, exibe a mensagem
          <div>Nenhum produto encontrado com este nome</div>
        )}
      </StyledProduto>
      <Footer /> {/* Componente de rodapé */}
    </>
  );
};

export default PaginaDeProdutos;