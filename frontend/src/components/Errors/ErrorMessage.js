import React from "react";
import styled from "styled-components";

export const SigninError = ({ error }) => (
  <SigninErrorContainer>
    <p data-test="graphql-error">
      {error.message.replace("GraphQL error: ", "")}
    </p>
  </SigninErrorContainer>
);

const SigninErrorContainer = styled.div`
  background: #f55;
  color: white;
  padding: 1.4rem 0;
  text-align: center;
  font-size: 1.8rem;
  min-height: auto !important;
`;

const gqlErrors = error => {
  const errMessage = error.message.replace("GraphQL error: ", "");
  if (errMessage.includes("name = username")) {
    return <li>username is already excest</li>;
  } else if (errMessage.includes("name = email")) {
    return <li>email is already excest</li>;
  } else {
    return null;
  }
};

export const DefaultError = ({ error, validationErrors }) => {
  // convert validation errors to an array
  let vErrors;
  validationErrors &&
    (vErrors = Object.keys(validationErrors).map(errorVal => {
      return validationErrors[errorVal];
    }));

  if (!error || !error.message) {
    if (vErrors.join("").length > 0) {
      return (
        <DefaultErrorContainer>
          <div>Error</div>
          <ul data-test="graphql-error">
            {vErrors.map(error => error !== "" && <li key={error}>{error}</li>)}
          </ul>
        </DefaultErrorContainer>
      );
    } else {
      return null;
    }
  } else {
    return (
      <DefaultErrorContainer>
        <div>Error</div>
        <ul data-test="graphql-error">
          {gqlErrors(error)}
          {vErrors.map(error => error !== "" && <li>{error}</li>)}
        </ul>
      </DefaultErrorContainer>
    );
  }
};

const DefaultErrorContainer = styled.div`
  background: white;
  border-radius: 13px;
  overflow: hidden;
  margin: 2rem 4rem;
  text-align: left;
  box-shadow: ${props => props.theme.shadow4};
  @media (max-width: ${props => props.theme.breakPoint14}) {
    /* HERE */
    margin: 2rem 2rem;
  }
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
        padding-bottom: 0.6rem;
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
