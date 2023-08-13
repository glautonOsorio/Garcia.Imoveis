import { ButtonComponent } from "../Button/Button.component";
import * as Styled from "./Resumo.style";

export const ResumoComponent = () => {
  return (
    <Styled.ResumoWrapper>
      <p>aqui vai ser o resumo da sua compra</p>
      <ButtonComponent type="button" text="Continue Comprando" />
      <ButtonComponent type="submit" text="Prosseguir para o Checkout" />
    </Styled.ResumoWrapper>
  );
};
