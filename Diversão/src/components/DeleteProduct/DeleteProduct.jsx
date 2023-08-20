import { Compra } from "../../services/CarrinhoService/CarrinhoService";
import ClearIcon from "@mui/icons-material/Clear";

const DeleteProduct = ({ produtoId }) => {
  const Delete = async (id) => {
    await Compra.Delete(id);
    window.location.reload();
  };
  return (
    <>
      <ClearIcon
        onClick={() => {
          Delete(produtoId);
        }}
      />
    </>
  );
};

export default DeleteProduct;
