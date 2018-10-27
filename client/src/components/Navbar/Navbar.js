import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";

import Search from "../Shot/Search";
import Signout from "../Auth/Signout";
import NavbarAuth from "./NavbarAuth";
import NavbarUnAuth from "./NavbarUnAuth";

const Navbar = ({ session }) => (
  <Fragment>
    <Nav>
      <div className="navContent wrapper big-wrapper">
        <Link to="/" className="logo">
          <img
            className="logoImg"
            alt="dribbble logo"
            src="http://www.jrentdesign.com/images/dribbble_type.png"
          />
        </Link>
        {session && session.getCurrentUser ? (
          <NavbarAuth session={session} />
        ) : (
          <NavbarUnAuth />
        )}
        <Search />
      </div>
    </Nav>
  </Fragment>
);

export default Navbar;

const Nav = Styled.nav`
    background: ${props => props.theme.gray2};
    color: ${props => props.theme.gray6};
    font-size: 1.3rem;
    height: 5.7rem;
    display: flex;
    text-transform: capitalize;
    .navContent {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo {
        max-width: 8rem;
        min-width: 8rem;
        text-decoration: none;
        color: inherit
        .logoImg {
          width: 100%
        }
      }
      > div:first-of-type {
        margin-left: auto;
        display: flex;
        align-items: center
        align-self: stretch
        p {
          margin: 0;
          padding-right: 1rem
        }
      }
`;
