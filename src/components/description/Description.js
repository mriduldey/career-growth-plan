import React from "react";

import EditorJs from "react-editor-js";
import { EDITOR_JS_TOOLS } from "./tools";

import { Card } from "react-bootstrap";

import "./description.css";

function Description({ header, background, cardClass }) {
  return (
    <Card
      bg={background}
      className={`description-card ${cardClass ? cardClass : ""}`}
    >
      {header ? <Card.Header>{header}</Card.Header> : null}
      <Card.Body>
        <EditorJs tools={EDITOR_JS_TOOLS}  onChange={(x,y,z) => {
          console.log(x,y,z);
        }} />
      </Card.Body>
    </Card>
  );
}

export default Description;
