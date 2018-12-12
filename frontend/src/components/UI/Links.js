import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Links = () => {
  return (
    <Container>
      <h3>
        <Link to="/">Dribbble</Link>
      </h3>
      <ul>
        <li>
          <Link to="/coming-soon">About</Link>
        </li>
        <li>
          <Link to="/coming-soon">Help</Link>
        </li>
        <li>
          <Link to="/coming-soon">Contact</Link>
        </li>
        <li>
          <Link to="/coming-soon">Careers</Link>
        </li>
        <li>
          <Link to="/coming-soon">Terms</Link>
        </li>
        <li>
          <Link to="/coming-soon">Guidelines</Link>
        </li>
        <li>
          <Link to="/coming-soon">Privacy</Link>
        </li>
        <li>
          <Link to="/coming-soon">Shop</Link>
        </li>
        <li>
          <Link to="/coming-soon">Testimonials</Link>
        </li>
        <li>
          <Link to="/coming-soon">Media Kit</Link>
        </li>
        <li>
          <Link to="/coming-soon">Advertise</Link>
        </li>
        <li>
          <Link to="/coming-soon">API</Link>
        </li>
        <li>
          <Link to="/coming-soon">Apps</Link>
        </li>
      </ul>
    </Container>
  );
};
export default Links;

const Container = styled.div`
  height: 17.5rem;
  width: 27%;
  @media (max-width: ${props => props.theme.breakPoint7}) {
    height: auto;
    width: auto;
  }
  @media (max-width: ${props => props.theme.breakPoint8}) {
    height: 17.5rem;
  }
  > ul {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 100%;
    align-content: space-between;
  }
`;
