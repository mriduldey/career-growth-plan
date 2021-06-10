import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Col, Row } from "react-bootstrap";

import Past from "./components/past/Past";
import Present from "./components/present/Present";
import Future from "./components/future/Future";

function App() {
  return (
    <div className="App">
      <p>employee career goal app</p>
      <Container fluid>
        <Row className="mb-3">
          <Col>
            <Past />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Present />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Future />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
