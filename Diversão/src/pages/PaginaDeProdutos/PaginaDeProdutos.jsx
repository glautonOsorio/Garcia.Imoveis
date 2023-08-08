import React from "react";
import { useState, useEffect } from "react";
import CardProduto from "../../components/CardProduto/CardProduto.component";
import { StyledContent, StyledProduto } from "./PaginaDeProduto.styled";
import BuscaProduto from "../../components/BuscaProduto/BuscaProduto.component";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


const PaginaDeProdutos = () => {
  const [items, setItems] = useState([""]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    fetchProdutos();
  }, []);

  const fetchProdutos = async () => {
    const response = await fetch("http://localhost:4000/produtos");
    const produtos = await response.json();
    setItems(produtos);
    setFilteredItems(produtos); //filtra produtos da busca
    return produtos;
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    const filtered = items.filter((item) =>
      item.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredItems(filtered);
  };


  return (
    <>
    <Header/>
    <StyledContent>
    <BuscaProduto searchTerm={searchTerm} onSearchChange={handleSearch} />
    </StyledContent>
    <StyledProduto>
    {filteredItems.length > 0 ? (
      filteredItems.map((item) => {
        return (
          <CardProduto
            item={item}
            key={item.id || "0"}
          />
        );
      })
    ) : (
      <div>Não tem produto</div>
    )}
  </StyledProduto>
  <Footer/>
  </>
  );
};


export default PaginaDeProdutos;
