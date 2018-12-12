import React, { Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { PinkBtn } from "../../styles/Buttons";

const UnAuthMessage = ({ session }) => {
  let message = (
    <Message>
      <div className="message">
        <p>
          <span>What are you working on?</span> Dribbble is where designers get
          inspired and hired.
        </p>
        <Link to="/signup">
          <PinkBtn>Continue →</PinkBtn>
        </Link>
      </div>
      <div className="hire">
        Looking to hire a designer? <Link to="coming-soon">Learn more</Link>
      </div>
    </Message>
  );
  return <Fragment>{message}</Fragment>;
};
export default UnAuthMessage;

const Message = styled.div`
  .message {
    background: ${props => props.theme.gray1};
    text-align: center;
    font-size: 1.8rem;
    padding: 4rem 0;
    p {
      margin-bottom: 1.4rem span {
        font-weight: bold;
        color: white;
      }
    }
  }
  .hire {
    background: ${props => props.theme.gray2};
    text-align: center;
    font-size: 1.5rem;
    padding: 2rem 0;
    a {
      color: white;
      text-decoration: underline;
    }
  }
`;
