import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";

const UnAuthMessage = () => {
  return (
    <Message>
      <p>
        <span>What are you working on?</span> Dribbble is where designers get
        inspired and hired.
      </p>
      <Link to="/signup">
        <HighlightedBtn>Continue →</HighlightedBtn>
      </Link>
    </Message>
  );
};

export default UnAuthMessage;

const Message = Styled.div`
    background: #252525;
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

const HighlightedBtn = Styled.button`
  background: #e84f89;
  padding: 1.3rem 3.2rem;
  border: none;
  border-radius: 7px;
  font-size: 1.4rem;
  color: white;
  cursor: pointer;
  outline: none
`;
