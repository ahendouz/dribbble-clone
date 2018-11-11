import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarUnAuth = () => (
  <NavUnAuth>
    <ul>
      <li className="link">
        <Link to="/signin">Signin</Link>
      </li>
      <li className="link">
        <Link to="/signup">Signup</Link>
      </li>
    </ul>
  </NavUnAuth>
);
export default NavbarUnAuth;

const NavUnAuth = styled.div`
  margin-left: auto;
  @media (max-width: ${props => props.theme.breakPoint9}) {
      margin-left: 0;
  }
    ul {
        margin: 0;
        padding-right: 2.7rem;
        display: flex;
        align-items: center;
        @media (max-width: ${props => props.theme.breakPoint9}) {
          padding-right: 0
        }
        .link {
          padding-left: 15px;
          font-weight: inherit
        }
      }
    }
`;
