import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import SVGicon from "../../icons/SVGicon";
import Signout from "../Auth/Signout";
import SmallUserImage from "../UI/SmallUserImage";

const NavbarAuth = ({
  session: {
    getCurrentUser: { id, profileImage, username, fullname }
  }
}) => (
  <NavAuth>
    <div className="dropdown">
      <button>
        <SmallUserImage profileImage={profileImage} size="1.8rem" />
      </button>
      <div className="items">
        <Link to={`/${id}`} className="username">
          {fullname}
        </Link>
        <hr />
        <Signout />
      </div>
    </div>
    <div className="addNewShot">
      <Link to="/shot/add">
        <SVGicon name="upload" />
      </Link>
    </div>
  </NavAuth>
);
export default NavbarAuth;

const NavAuth = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  align-self: stretch;
  @media (max-width: ${props => props.theme.breakPoint9}) {
    margin-left: 0;
  }
  .addNewShot {
    margin-right: 3rem;
    margin-bottom: -2px;
    @media (max-width: ${props => props.theme.breakPoint9}) {
      margin-right: 0;
    }
    svg {
      margin-top: 6px;
      width: 21px;
      height: 20px;
      fill: ${props => props.theme.gray6};
      &:hover {
        fill: ${props => props.theme.gray8};
        transition: fill 0.6s;
      }
    }
  }
  .dropdown {
    position: relative;
    display: flex;
    padding-right: 1rem;
    align-self: stretch;

    > button {
      background: none;
      font-size: inherit;
      text-transform: capitalize;
      color: ${props => props.theme.gray5};
      > div {
        margin-bottom: -2px;
      }
    }
    .items {
      display: none;
      position: absolute;
      top: 50px;
      @media (max-width: ${props => props.theme.breakPoint9}) {
        top: 41px;
      }
      left: -7px;
      background-color: ${props => props.theme.gray2};
      min-width: 130px;
      box-shadow: ${props => props.theme.shadow1};
      z-index: 1;
      border-radius: 0px 0px 8px 8px;
      .username,
      .signout {
        display: block;
        margin: 6px 0;
        padding: 4px 11px;
        color: ${props => props.theme.gray5};
        &:hover {
          background-color: #dddddd4d;
        }
      }
      hr {
        border-top: 1px solid #9e9e9e26;
        border-bottom: none;
      }
    }
    &:hover {
      .items {
        display: block;
      }
    }
  }
`;
