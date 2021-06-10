import React from "react";

import { Card } from "react-bootstrap";
import DescriptionWrapper from "../HOC/descriptionWrapper/DescriptionWrapper";
import Description from "../description/Description";

import { Row, Col } from "react-bootstrap";

function Future({ classList }) {
  return (
    <Card className={`${classList ? classList : ""}`}>
      <Card.Header>
        <h2>Future</h2>
      </Card.Header>
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
          <Col xs={12} md={4} lg={4}>
            <DescriptionWrapper descWrapHeader="Long-term goals (2-5 yrs.)">
              <Description header="Work goals" cardClass="mb-2" />
              <Description header="Personal goals" />
            </DescriptionWrapper>
          </Col>
          <Col xs={12} md={4} lg={6}>
            <DescriptionWrapper descWrapHeader="Development needs / skills required">
              <Description />
            </DescriptionWrapper>
          </Col>
          <Col xs={12} md={4} lg={6}>
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
