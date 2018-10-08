import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";

const UnAuthMessage = () => {
  return (
    <Message>
      <p>
        What are you working on? Dribbble is where designers get inspired and
        hired.
      </p>
      <Link to="/signup">
        <button>Continue</button>
      </Link>
    </Message>
  );
};

export default UnAuthMessage;

const Message = Styled.div`
    background: #111;
    text-align: center;
`;
