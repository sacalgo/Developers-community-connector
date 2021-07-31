import React, { Fragment } from "react";

const NotFound = () => {
  return (
    <Fragment>
      <h1 className="large text-primary">
        <i className="fas fa-exclamation-triangle"></i> Page Not found
      </h1>
      <p className="large"> This page doesn't exist!</p>
    </Fragment>
  );
};

export default NotFound;
