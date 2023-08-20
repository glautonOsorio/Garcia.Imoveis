import fetch from "cross-fetch";
const API_URL = `http://localhost:3000/produtos`;

const Get = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};

export const ListaDeProdutos = {
  Get,
};
