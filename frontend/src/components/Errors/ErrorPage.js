import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { HeadingPrimary } from "../../styles/Heading";

const Error = ({ error }) => (
  <Container>
    <div>
      <HeadingPrimary>Ops something went wrong.</HeadingPrimary>
      <p>
        Please reload the page or go back to the{" "}
        <span>
          <Link to="/">home page</Link>
        </span>
      </p>
      <div>
        <img
          src="https://res.cloudinary.com/ahendouz/image/upload/v1541272454/1_PhW8nDP8C9fDmHcfEE0mvA.png"
          alt="ball"
        />
      </div>
    </div>
  </Container>
);

export default Error;

const Container = styled.div`
  background: white;
  text-align: center;
  min-height: calc(100vh - 5.7rem);
  display: flex;
  justify-content: center;
  padding-top: 5rem;
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      font-size: 1.5rem;
      padding: 0rem 0 6rem 0;
      span {
        font-weight: 600;
        color: ${props => props.theme.gray6};
      }
    }
    > div {
      width: 22.2rem;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
  }
`;
