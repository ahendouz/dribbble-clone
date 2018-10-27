import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";

const NavbarUnAuth = () => (
  <NavUnAuth>
    <ul className="links">
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

const NavUnAuth = Styled.div`
    .links {
        margin: 0;
        padding-right: 2.7rem;
        display: flex;
        align-items: center;
        .link {
          padding-left: 15px;
          font-weight: inherit
        }
      }
    }
`;
