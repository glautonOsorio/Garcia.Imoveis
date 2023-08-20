import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import React from "react";
import { IoMdAlert } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./Style.css";

export const ErrorComponent = () => {
  const navigate = useNavigate();
  const handleEasterEgg = (e) => {
    e.preventDefault();
    navigate("/easterEggs");
  };
  return (
    <>
      <Col className="alignItens">
        <h2>
          Eitcha, parece que não encontramos essa página{" "}
          <IoMdAlert onClick={handleEasterEgg} style={{ color: "red" }} />
        </h2>
        <Image className="ImageError" src="../../assets/error404.gif" rounded />
      </Col>
    </>
  );
};
