import { useContext } from 'react';
import { ButtonComponent } from '../Button/Button.component';
import * as Styled from './Resumo.style';

export const ResumoComponent = ({carrinho}) => {

  const total = carrinho.reduce((acc, item) => {
    const itemPrice = parseFloat(item.preco.replace('R$', '')) * item.qty;
    return acc + itemPrice;
  }, 0)

  return(
    <Styled.ResumoWrapper>
      <h2>Soma Total: R${total.toFixed(2)}</h2>
      <ButtonComponent type='button' text='Continue Comprando'/>
      <ButtonComponent type='submit' text='Prosseguir para o Checkout'/>
    </Styled.ResumoWrapper>
  );
}