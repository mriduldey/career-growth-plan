import React from "react";

import { Card } from "react-bootstrap";
import DescriptionWrapper from "../HOC/descriptionWrapper/DescriptionWrapper";
import Description from "../description/Description";

import { Row, Col } from "react-bootstrap";

function Future() {
  return (
    <Card>
      <Card.Header>Future</Card.Header>
      <Card.Body>
        <Row>
          <Col xs={12} md={6} lg={4}>
            <DescriptionWrapper descWrapHeader="Short-term goals (< 6 mos.)">
              <Description header="Work goals" cardClass="mb-2" />
              <Description header="Personal goals" />
            </DescriptionWrapper>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <DescriptionWrapper descWrapHeader="Mid-term goals (6-24 mos.)">
              <Description header="Work goals" cardClass="mb-2" />
              <Description header="Personal goals" />
            </DescriptionWrapper>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <DescriptionWrapper descWrapHeader="Long-term goals (2-5 yrs.)">
              <Description header="Work goals" cardClass="mb-2" />
              <Description header="Personal goals" />
            </DescriptionWrapper>
          </Col>
          <Col xs={12} md={6}>
            <DescriptionWrapper descWrapHeader="Development needs / skills required">
              <Description />
            </DescriptionWrapper>
          </Col>
          <Col xs={12} md={6}>
            <DescriptionWrapper descWrapHeader="Action plan">
              <Description />
            </DescriptionWrapper>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Future;
