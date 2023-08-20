/** @jest-environment jsdom */
import { render, screen } from "@testing-library/react";
import PrincipalBody from "./PrincipalBody";
import React from "react";
import { BrowserRouter } from "react-router-dom";

test("PrincipalBody is render", () => {
  render(
    <BrowserRouter>
      <PrincipalBody />
    </BrowserRouter>
  );
});
