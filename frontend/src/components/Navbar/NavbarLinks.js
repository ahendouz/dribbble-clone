import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarLinks = () => {
  return (
    <Links className="links">
      <li>
        <Link to="/">Shots</Link>
      </li>
      <li>
        <Link to="/coming-soon">Designers</Link>
      </li>
      <li>
        <Link to="/coming-soon">Teams</Link>
      </li>
      <li>
        <Link to="/coming-soon">Community</Link>
      </li>
      <li>
        <Link to="/coming-soon">Jobs</Link>
      </li>
    </Links>
  );
};

export default NavbarLinks;

const Links = styled.ul`
  display: flex;
  margin-left: 3rem;
  font-size: 1.45rem;
  li {
    padding-right: 2rem;
    color: ${props => props.theme.gray5};
    &:hover {
      color: ${props => props.theme.gray7};
      transition: color 0.2s;
    }
  }
`;
