import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import * as Styled from './PaginaDeCompra.style';
import { ProductsComponent } from '../../components/Products/Products.component';
import { ResumoComponent } from '../../components/Resumo/Resumo.component';
import { MathProvider } from '../../contexts/MathContext/Math.context';


export const PaginaDeCompra = () => {

  return(
    <>
      <MathProvider>
        <Header/>
        <Styled.CarrinhoWrapper>
          <ProductsComponent/>
          <ResumoComponent/>
        </Styled.CarrinhoWrapper>
        <Footer/>
      </MathProvider>
    </>
  );
}