import React from "react";

import { Card, Row, Col } from "react-bootstrap";
import DescriptionWrapper from "../HOC/descriptionWrapper/DescriptionWrapper";
import Description from "../description/Description";

import { futureHeaders } from "../../cardHeaders/futureHeaders";

function Future({ classList }) {
  return (
    <Card className={`${classList ? classList : ""}`}>
      <Card.Header>
        <h2>Future</h2>
      </Card.Header>
      <Card.Body>
        <Row>
          {futureHeaders.map((headers, index) => (
            <Col
              xs={12}
              md={index < 2 ? 6 : 4}
              lg={index < 3 ? 4 : 6}
              key={`future-${index}`}
            >
              <DescriptionWrapper descWrapHeader={headers}>
                {index < 3 ? (
                  <>
                    <Description header="Work goals" cardClass="mb-2" />
                    <Description header="Personal goals" />
                  </>
                ) : (
                  <Description />
                )}
              </DescriptionWrapper>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Future;
