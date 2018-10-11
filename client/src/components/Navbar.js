import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Signout from "./Auth/Signout";
import Styled from "styled-components";

import UnAuthMessage from "../UI/UnAuthMessage";

const Navbar = ({ session }) => (
  <Fragment>
    <Nav>
      <div className="container">
        <NavLink to="/">
          <img
            alt="dribbble"
            src="http://cdn.embed.ly/providers/logos/dribbble.png"
          />
        </NavLink>
        <div>
          {session && session.getCurrentUser ? (
            <NavbarAuth session={session} />
          ) : (
            <NavbarUnAuth />
          )}
          <NavLink to="/search">Search</NavLink>
        </div>
      </div>
    </Nav>
    {!session.getCurrentUser && <UnAuthMessage />}
  </Fragment>
);

const NavbarAuth = ({ session }) => (
  <ul>
    <NavLink to="/profile">
      <li>{session.getCurrentUser.username}</li>
    </NavLink>
    <li>
      <Signout />
    </li>
  </ul>
);
const NavbarUnAuth = () => (
  <ul>
    <li>
      <NavLink to="/signin">Signin</NavLink>
    </li>
    <li>
      <NavLink to="/signup">Signup</NavLink>
    </li>
  </ul>
);

export default Navbar;

const Nav = Styled.nav`
    background: #555;
    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      div {
        margin-left: auto;
        display: flex;
        color: #333;
        p {
          margin: 0;
          padding-right: 1rem
        }
      }
    }
    a {
      flex-basis: 10%;
      text-decoration: none;
      color: inherit
      img {
        width: 100%
      }
    }
    ul {
      margin: 0;
      padding-right: 2rem;
      li {
        padding-left: 15px
      }
    }
`;
