/** @jest-environment jsdom */
import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import CardProduto from "./CardProduto.component";

test("PrincipalBody is render", () => {
  render(
    <BrowserRouter>
      <CardProduto />
    </BrowserRouter>
  );
});
