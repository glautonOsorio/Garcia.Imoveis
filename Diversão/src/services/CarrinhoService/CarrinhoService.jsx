import fetch from "cross-fetch";
const API_URL = `http://localhost:3000/carrinho`;

const Get = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};

const Create = async (newData) => {
  await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      produto_id: newData.produto_id,
      nome: newData.nome,
      preço: newData.preço,
      imagem: newData.imagem,
      quantidade: 1,
    }),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => {
      alert("Cadastrado com sucesso");
    })
    .catch((err) => {
      alert(`Erro ao cadastrar ${err.message}`);
    });
};

const Delete = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: "Delete",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => {
      alert("Produto deletado com sucesso");
    })
    .catch((err) => {
      alert(`Erro ao deletar ${err.message}`);
    });
};
export const Compra = {
  Get,
  Create,
  Delete,
};
