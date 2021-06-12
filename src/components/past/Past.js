import React from "react";

import { Card, Row, Col } from "react-bootstrap";

import DescriptionWrapper from "../HOC/descriptionWrapper/DescriptionWrapper";
import Description from "../description/Description";

import { pastHeaders } from "../../cardHeaders/pastHeaders";

function Past({ classList }) {
  return (
    <Card className={`${classList ? classList : ""}`}>
      <Card.Header>
        <h2>Past</h2>
      </Card.Header>
      <Card.Body>
        <Row>
          {pastHeaders.map((header, index) => (
            <Col xs={12} md={4} key={`past-${index}`}>
              <DescriptionWrapper descWrapHeader={header}>
                <Description />
              </DescriptionWrapper>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Past;
