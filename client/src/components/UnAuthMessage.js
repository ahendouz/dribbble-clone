import React, { Fragment } from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";

import { PinkBtn } from "../styles/Buttons";

const UnAuthMessage = ({ session }) => {
  let message = (
    <Message>
      <p>
        <span>What are you working on?</span> Dribbble is where designers get
        inspired and hired.
      </p>
      <Link to="/signup">
        <PinkBtn>Continue →</PinkBtn>
      </Link>
    </Message>
  );
  return <Fragment>{message}</Fragment>;
};
export default UnAuthMessage;

const Message = Styled.div`
    background: ${props => props.theme.gray1};
    text-align: center;
    font-size: 1.8rem;
    padding: 4rem 0;
    p {
      margin-bottom: 1.4rem
      span {
        font-weight: bold
        color: white
      }
    }
`;
