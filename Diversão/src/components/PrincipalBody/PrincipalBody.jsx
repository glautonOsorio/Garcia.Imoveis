import { useEffect, useState } from "react";
import { ListaDeProdutos } from "../../services/ProdutosService/Produtos";
import ImagemPrincipal from "../../assets/ExemploPaiFilho.jpg";
import "./PrincipalBody.css";

const PrincipalBody = () => {
  const [produtos, setProdutos] = useState();

  useEffect(() => {
    const pegaProduto = async () => {
      await ListaDeProdutos.Get().then((produto) => {
        setProdutos(produto);
      });
    };
    pegaProduto();
  }, []);
  return (
    <div className="main-container">
      <h1 className="main-text-title">Feliz Dias dos Pais</h1>
      <div className="main-content">
        <div>
          <img className="main-image" src={ImagemPrincipal} alt="Pai e Filho" />
        </div>
        <div className="main-card">
          <h2 className="main-card-text-row">
            Estamos com um
            <p className="main-card-text-special">Super Desconto</p>
          </h2>
          <span className="main-card-text-row">
            Para você <p className="main-card-text-special">Pai</p>
          </span>
          <h3 className="main-card-text-special">20% de Desconto</h3>
          <span className="main-card-text-row">
            em uma compra de <p className="main-card-text-special">3</p> ou mais
            moveis
          </span>
          <button>Venha escolher o seu</button>
        </div>
      </div>

      <div>
        <h3 className="main-text-title">Veja nossos produtos</h3>
        <div className="main-product-row">
          {produtos &&
            produtos.map((produto) => {
              return (
                <div key={produto.id}>
                  <img
                    className="main-product-image"
                    src={produto.imagem}
                    alt="imagem de produto"
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default PrincipalBody;
