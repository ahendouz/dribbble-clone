import React from "react";

import PropTypes from "prop-types";

const DisplayError = ({ error }) => {
  if (!error || !error.message) return null;
  if (
    error.networkError &&
    error.networkError.result &&
    error.networkError.result.errors.length
  ) {
    return error.networkError.result.errors.map((error, i) => (
      <p data-test="graphql-error" key={i}>
        {error.message.replace("GraphQL error: ", "")}
      </p>
    ));
  }
  return (
    <p data-test="graphql-error">
      {error.message.replace("GraphQL error: ", "")}
    </p>
  );
};

DisplayError.defaultProps = {
  error: {}
};

DisplayError.propTypes = {
  error: PropTypes.object
};

export default DisplayError;
