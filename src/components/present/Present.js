import React from "react";

import { Card, Row, Col } from "react-bootstrap";
import DescriptionWrapper from "../HOC/descriptionWrapper/DescriptionWrapper";
import Description from "../description/Description";

import "./present.css";

function Present({ classList }) {
  return (
    <Card className={`${classList ? classList : ""}`}>
      <Card.Header>
        <h2>Present</h2>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col xs={12} md={6} lg={3}>
            <DescriptionWrapper descWrapHeader="Values">
              <Description />
            </DescriptionWrapper>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <DescriptionWrapper descWrapHeader="personal preferances">
              <Description />
            </DescriptionWrapper>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <DescriptionWrapper descWrapHeader="Competencies">
              <Description />
            </DescriptionWrapper>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <DescriptionWrapper descWrapHeader="Limitations">
              <Description />
            </DescriptionWrapper>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Present;
