import { useNavigate } from "react-router-dom";
import { ButtonComponent } from "../Button/Button.component";
import * as Styled from "./Resumo.style";

export const ResumoComponent = () => {
  const navigate = useNavigate();
  const redirectToProducts = () => {
    navigate("/produtos");
  };
  const redirectToCheckout = () => {
    navigate("/checkout");
  };
  return (
    <Styled.ResumoWrapper>
      <p>aqui vai ser o resumo da sua compra</p>
      <ButtonComponent
        type="button"
        onClick={redirectToProducts}
        text="Continue Comprando"
      />
      <ButtonComponent
        type="button"
        onClick={redirectToCheckout}
        text="Prosseguir para o Checkout"
      />
    </Styled.ResumoWrapper>
  );
};

