import React from "react";
import styled from "styled-components";

import PropTypes from "prop-types";

const DisplayError = ({ error, validationErrors, type }) => {
  // convert validation errors to an array
  let vErrors;
  validationErrors &&
    (vErrors = Object.keys(validationErrors).map(errorVal => {
      return validationErrors[errorVal];
    }));

  if (!error || !error.message) {
    if (type === "signup" && vErrors.join("").length > 0) {
      return (
        <SignupError>
          <div>Error</div>
          <ul data-test="graphql-error">
            {vErrors.map(error => {
              if (error != "") {
                return <li key={error}>{error}</li>;
              }
            })}
          </ul>
        </SignupError>
      );
    } else {
      return null;
    }
  } else if (error || error.message) {
    if (type === "signup") {
      return (
        <SignupError>
          <div>Error</div>
          <ul data-test="graphql-error">
            <li>{error.message.replace("GraphQL error: ", "")}</li>
            {vErrors.map(error => {
              if (error != "") {
                return <li>{error}</li>;
              }
            })}
          </ul>
        </SignupError>
      );
    } else if (type === "signin") {
      return (
        <SigninError>
          <p data-test="graphql-error">
            {error.message.replace("GraphQL error: ", "")}
          </p>
        </SigninError>
      );
    }
  } else {
    <SigninError>
      <p data-test="graphql-error">
        {error.message.replace("GraphQL error: ", "")}
      </p>
    </SigninError>;
  }
};

DisplayError.defaultProps = {
  error: {}
};

DisplayError.propTypes = {
  error: PropTypes.object
};

export default DisplayError;

const SigninError = styled.div`
    background: #f55;
    color: white;
    padding: 1.4rem 0;
    text-align: center;
    font-size: 1.8rem;
`;
const SignupError = styled.div`
  background: white;
  border-radius: 13px;
  overflow: hidden;
  margin: 2rem 4rem;
  text-align: left;
  box-shadow: ${props => props.theme.shadow4};
  @media (max-width: ${props => props.theme.breakPoint14}) {
      /* HERE */
      margin: 2rem 2rem;
    };
  div {
    background: ${props => props.theme.highlight6};
    color: white;
    padding: 1rem 2rem;
    font-size: 1.4rem;
    font-weight: 600;
  }
  ul {
    padding: 1.5rem 3.4rem;
    color: ${props => props.theme.highlight6};
    font-size: 1.3rem;
    li {
      position: relative;
      &:not(:last-of-type) {
        padding-bottom: .6rem
      }
      &:before {
        content: "";
        background: ${props => props.theme.highlight6};
        position: absolute;
        top: 7.4px;
        left: -15px;
        height: 6px;
        width: 6px;
        border-radius: 50%;
      }
    }
  }
`;
