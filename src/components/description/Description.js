import React from "react";

import EditorJs from "react-editor-js";
import { EDITOR_JS_TOOLS } from "./tools";

import { Card } from "react-bootstrap";

import "./description.css";

function Description({ header, cardClass }) {
  return (
    <Card className={`description-card ${cardClass ? cardClass : ""}`}>
      {header ? <Card.Header>{header}</Card.Header> : null}
      <Card.Body>
        <EditorJs
          tools={EDITOR_JS_TOOLS}
          onChange={() => {}}
        />
      </Card.Body>
    </Card>
  );
}

export default Description;
