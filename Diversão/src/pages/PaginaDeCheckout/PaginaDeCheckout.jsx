import { CheckoutComponent } from "../../components/Checkout/CheckoutComponent";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import React from "react";

const PaginaDeCheckout = () => {
  return (
    <>
      <Header />
      <CheckoutComponent />
      <Footer />
    </>
  );
};

export default PaginaDeCheckout;
