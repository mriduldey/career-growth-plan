import React from "react";

import { Card, Row, Col } from "react-bootstrap";

import DescriptionWrapper from "../HOC/descriptionWrapper/DescriptionWrapper";
import Description from "../description/Description";

function Past() {
  return (
    <Card>
      <Card.Header>Past</Card.Header>
      <Card.Body>
        <Row>
          <Col xs={12} md={4}>
            <DescriptionWrapper descWrapHeader="Who are you?">
              <Description />
            </DescriptionWrapper>
          </Col>
          <Col xs={12} md={4}>
            <DescriptionWrapper descWrapHeader="Education">
              <Description />
            </DescriptionWrapper>
          </Col>
          <Col xs={12} md={4}>
            <DescriptionWrapper descWrapHeader="Past employment">
              <Description />
            </DescriptionWrapper>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Past;
