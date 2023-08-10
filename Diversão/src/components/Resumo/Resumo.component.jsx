import { useContext } from 'react';
import * as Styled from './Resumo.style';
import { MathContext } from '../../contexts/MathContext/Math.context';

export const ResumoComponent = () => {

  const { qty, totalPrc } = useContext(MathContext);

  return(
        <Styled.SummaryWrapper>
          <p>quantidade total</p>
          <span>{qty}</span>
          <p>valor total</p>
          <span>{totalPrc}</span>
          <button>Continuar Comprando</button>
          <button>Finalizar Compra</button>
        </Styled.SummaryWrapper>
  );
}