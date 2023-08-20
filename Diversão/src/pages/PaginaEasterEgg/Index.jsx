import "./Style.css";
import { Col, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import TeamCard from "../../components/TeamCard/Index";
import eag from "../../assets/yoshi5.gif";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import React from "react";

export const PaginaSquad = () => {
  return (
    <Container fluid>
      <Header />
      <Col>
        <Col className="text-center">
          <h2 style={{ margin: "40px" }}>
            Equipe de Desenvolvimento Web - Trindade
          </h2>
          <p
            style={{
              fontSize: "20px",
              color: "green",
              marginBottom: "-30px",
              marginTop: "-40px",
            }}
          >
            Congrats, you find the easter egg! <Image src={eag} />
          </p>
          <hr />
        </Col>
        <Row>
          <Row>
            <Col className="cardEaster">
              <Col id="teamCard">
                <TeamCard usuario="portexrp" />
              </Col>
              <Col id="aboutUs">
                <h3>Soft Skills</h3>
                <hr />
                <p>Node js - Models View Controller Middleware's</p>
                <p>
                  SQL - <span> Script Procedures Triggers CRUD</span>
                </p>
                <p>React</p>
                <p></p>
              </Col>
            </Col>
          </Row>
          <Row>
            <Col>
              <Col></Col>
              <Col></Col>
              <TeamCard usuario="devmariano" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Col></Col>
              <Col></Col>
              <TeamCard usuario="rodrigopieritz" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Col></Col>
              <Col></Col>
              <TeamCard usuario="glautonOsorio" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Col></Col>
              <Col></Col>
              <TeamCard usuario="CesarNahra" />
            </Col>
          </Row>
        </Row>
      </Col>
      <Footer />
    </Container>
  );
};
