/* eslint-disable react/prop-types */

import { StyledBuscaProduto } from "./BuscaProduto.styled";
import React from "react";

import SearchIcon from "@mui/icons-material/Search"; // Importe o ícone de pesquisa do Material-UI

const BuscaProduto = ({ searchTerm, onSearchChange }) => {
  return (
    <StyledBuscaProduto>
      <input
        type="text"
        placeholder="Busque o produto por nome"
        value={searchTerm}
        onChange={onSearchChange}
      />
      <div className="search-icon">
        <SearchIcon />
      </div>
    </StyledBuscaProduto>
  );
};

export default BuscaProduto;
