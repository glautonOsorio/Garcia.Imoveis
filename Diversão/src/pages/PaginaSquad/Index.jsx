import "./Style.css";
import { Col, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import TeamCard from "../../components/TeamCard/Index";
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

          <hr />
        </Col>
        <Row>
          <Row>
            <Col className="cardEaster">
              <Col id="teamCard">
                <TeamCard usuario="portexrp" />
              </Col>
              <Col id="aboutUs">
                <h3>Skills</h3>
                <hr />
                <p>Node js </p>
                <p>SQL </p>
                <p>React</p>
                <p>Javascript</p>
                <p>PHP</p>
                <p>Quality Assurance - Tester</p>
                <p>Linux</p>
                <p>Rede</p>
              </Col>
            </Col>
          </Row>
          <Row>
            <Col className="cardEaster">
              <Col id="teamCard">
                <TeamCard usuario="devmariano" />
              </Col>
              <Col id="aboutUs">
                <h3>Skills</h3>
                <hr />
                <p>Node js </p>
                <p>SQL </p>
                <p>React</p>
                <p>Javascript</p>
              </Col>
            </Col>
          </Row>
          <Row>
            <Col className="cardEaster">
              <Col id="teamCard">
                <TeamCard usuario="rodrigopieritz" />
              </Col>
              <Col id="aboutUs">
                <h3>Skills</h3>
                <hr />
                <p>Node js </p>
                <p>SQL </p>
                <p>React</p>
                <p>Javascript</p>
              </Col>
            </Col>
          </Row>
          <Row>
            <Col className="cardEaster">
              <Col id="teamCard">
                <TeamCard usuario="glautonOsorio" />
              </Col>
              <Col id="aboutUs">
                <h3>Skills</h3>
                <hr />
                <p>Node js </p>
                <p>SQL </p>
                <p>React</p>
                <p>Javascript</p>
              </Col>
            </Col>
          </Row>
          <Row>
            <Col className="cardEaster">
              <Col id="teamCard">
                <TeamCard usuario="CesarNahra" />
              </Col>
              <Col id="aboutUs">
                <h3>Skills</h3>
                <hr />
                <p>Node js </p>
                <p>SQL </p>
                <p>React</p>
                <p>Javascript</p>
              </Col>
            </Col>
          </Row>
        </Row>
      </Col>
      <Footer />
    </Container>
  );
};
