import React from "react";
import { StyledBuscaProduto } from "./BuscaProduto.styled"; 

const BuscaProduto = ({ searchTerm, onSearchChange }) => {
  return (
    <StyledBuscaProduto
      type="text"
      placeholder="Busque o produto por nome"
      value={searchTerm}
      onChange={onSearchChange}
    />
  );
};

export default BuscaProduto;