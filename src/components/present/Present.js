import React from "react";

import { Card, Row, Col } from "react-bootstrap";
import DescriptionWrapper from "../HOC/descriptionWrapper/DescriptionWrapper";
import Description from "../description/Description";

import { presentHeaders } from "../../cardHeaders/presentHeaders";

import "./present.css";

function Present({ classList }) {
  return (
    <Card className={`${classList ? classList : ""}`}>
      <Card.Header>
        <h2>Present</h2>
      </Card.Header>
      <Card.Body>
        <Row>
          {presentHeaders.map((headers, index) => (
            <Col xs={12} md={6} lg={3} key={`present-${index}`}>
              <DescriptionWrapper descWrapHeader={headers}>
                <Description />
              </DescriptionWrapper>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Present;
