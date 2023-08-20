import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { ErrorComponent } from "../../components/Error/Index";
import React from "react";

const PaginaDeErro = () => {
  return (
    <>
      <Header />
      <ErrorComponent />
      <Footer />
    </>
  );
};

export default PaginaDeErro;
