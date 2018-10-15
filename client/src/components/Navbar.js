import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Signout from "./Auth/Signout";
import Styled from "styled-components";

import UnAuthMessage from "../UI/UnAuthMessage";
import Search from "./Shot/Search";

const Navbar = ({ session }) => (
  <Fragment>
    <Nav>
      <div className="container">
        <NavLink to="/">
          <img
            alt="dribbble"
            src="http://www.jrentdesign.com/images/dribbble_type.png"
          />
        </NavLink>
        <div>
          {session && session.getCurrentUser ? (
            <NavbarAuth session={session} />
          ) : (
            <NavbarUnAuth />
          )}
          <Search />
        </div>
      </div>
    </Nav>
    {!session.getCurrentUser ? <UnAuthMessage /> : null}
  </Fragment>
);

const NavbarAuth = ({ session }) => (
  <DropDown>
    <button>{session.getCurrentUser.username}</button>
    <div className="dropdown-content">
      <NavLink to="/profile">{session.getCurrentUser.username}</NavLink>
      <hr />
      <Signout />
    </div>
  </DropDown>
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
    background: #333333;
    color: #DDDDDD;
    font-weight: 200;
    font-size: 1.3rem;
    height: 5rem;
    display: flex;
    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      > a {
        max-width: 8rem;
        min-width: 8rem;
        text-decoration: none;
        color: inherit
        img {
          width: 100%
        }
      }
      > div {
        margin-left: auto;
        display: flex;
        align-items: center
        align-self: stretch
        p {
          margin: 0;
          padding-right: 1rem
        }
      }
      ul {
        margin: 0;
        padding-right: 2.7rem;
        display: flex;
        align-items: center;
        li {
          padding-left: 15px
        }
      }
    }
`;

const DropDown = Styled.div`
  position: relative;
  display: flex;
  color: #DDDDDD;
  margin-right: 3rem;
  align-self: stretch;
  > button {
    background: none;
    border: none;
    font-size: inherit
    color: inherit;
    &:focus {
      outline: none;
    }
  }
  > div {
    display: none;
    position: absolute;
    top: 41px;
    background-color: #333333;
    min-width: 130px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    border-radius: 8px;
    a, p {
      text-decoration: none;
      display: block;
      &:hover {
        background-color: #dddddd4d;
      }
    }
    a, p {
      margin: 6px 0;
      padding: 4px;
    }
    hr {
      border-top: 1px solid #9e9e9e26;
      border-bottom: none;
    }
  }
  &:hover {
    > div {
      display: block;
    }
  }
`;
