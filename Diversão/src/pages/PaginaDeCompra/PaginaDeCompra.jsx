import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import * as Styled from './PaginaDeCompra.style';
import { MathProvider } from '../../contexts/MathContext/Math.context';
import { CarrinhoComponent } from '../../components/Carrinho/Carrinho.component';
import { ResumoComponent } from '../../components/Resumo/Resumo.component';


export const PaginaDeCompra = () => {

  return(
    <>
      <MathProvider>
        <Header/>
        <Styled.CarrinhoWrapper>
          <CarrinhoComponent/>
          <ResumoComponent/>
        </Styled.CarrinhoWrapper>
        <Footer/>
      </MathProvider>
    </>
  );
}