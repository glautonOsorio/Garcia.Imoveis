/** @jest-environment jsdom */
import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import BuscaProduto from "./BuscaProduto.component";

test("PrincipalBody is render", () => {
  render(
    <BrowserRouter>
      <BuscaProduto />
    </BrowserRouter>
  );
});
