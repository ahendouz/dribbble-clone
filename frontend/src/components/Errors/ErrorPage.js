import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { HeadingPrimary } from "../../styles/Heading";
import { ReactComponent as Ops } from "../../svgs/ops.svg";

const Error = () => (
  <Container>
    <HeadingPrimary>Ops something went wrong.</HeadingPrimary>
    <p>
      Please reload the page or go back to the{" "}
      <span>
        <Link to="/">home page</Link>
      </span>
    </p>
    <Ops style={{ marginTop: "-3rem" }} />
  </Container>
);

export default Error;

export const Container = styled.div`
  background: white;
  height: 62.4rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 5rem;
  text-align: center;
  @media (max-width: ${props => props.theme.breakPoint15}) {
    h1 {
      font-size: 2.1rem;
    }
    p {
      font-size: 1.1rem;
    }
    svg {
      width: 100% !important;
    }
  }
  h1 {
    color: ${props => props.theme.gray3};
  }
  p {
    font-size: 1.5rem;
    padding-bottom: 6rem;
  }
  > svg {
    width: 60%;
    height: auto;
    width: 500px;
  }
`;
