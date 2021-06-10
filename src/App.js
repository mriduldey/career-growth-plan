import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Col, Row, Image } from "react-bootstrap";

import Past from "./components/past/Past";
import Present from "./components/present/Present";
import Future from "./components/future/Future";

import pdfIcon from "./icons/pdf-icon.svg";

function App() {
  return (
    <div className="App">
      <div className="shadow p-2 rounded-circle d-flex print-button">
        <Image
          src={pdfIcon}
          alt="pdf-icon"
          onClick={(e) => {
            e.preventDefault();
            window.print();
          }}
        ></Image>
      </div>

      <h1 className="my-4">Career Growth Plan</h1>

      <Container fluid>
        <Row className="mb-3">
          <Col>
            <Past classList="rich-purple" />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Present classList="rich-purple" />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Future classList="rich-purple" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
