import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import "./Style.css";
import React from "react";

export const TeamCard = ({ usuario }) => {
  const [descricao, setDescricao] = useState("");

  useEffect(() => {
    fetch(`https://api.github.com/users/${usuario}`)
      .then((response) => response.json())
      .then((data) => {
        setDescricao(data);
      })
      .catch((error) => {
        console.log("error fetch from git", error);
      });
  }, []);
  return (
    <div>
      <Card className="styleCard" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={descricao?.avatar_url} />
        <Card.Body>
          <Card.Title>{descricao?.name}</Card.Title>
          <hr />
          <Card.Text className="font-italic">
            <strong>Bio: </strong>
            <em>{descricao?.bio} </em>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TeamCard;
