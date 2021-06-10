import React from "react";

import "./descriptionWrapper.css";

function DescriptionWrapper({ descWrapHeader, children }) {
  return (
    <React.Fragment>
      <div className="mb-3">
        <h3 className="text-left smaller-header">{descWrapHeader}</h3>
        {children}
      </div>
    </React.Fragment>
  );
}

export default DescriptionWrapper;
