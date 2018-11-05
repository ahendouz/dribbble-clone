import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";

import SVGicon from "../SVGicon";
import Signout from "../Auth/Signout";

const NavbarAuth = ({ session }) => (
  <NavAuth className="user">
    <div className="addNewShot">
      <Link to="/shot/add">
        <SVGicon
          name="upload"
          style={{ marginTop: "6px" }}
          width={21}
          height={20}
        />
      </Link>
    </div>
    <div className="dropdown">
      <button>{session.getCurrentUser.username}</button>
      <div className="items">
        <Link to="/profile">{session.getCurrentUser.username}</Link>
        <hr />
        <Signout />
      </div>
    </div>
  </NavAuth>
);
export default NavbarAuth;

const NavAuth = Styled.div`
    .addNewShot {
        padding-right: 1rem;
        margin-bottom: -2px;
        svg {
        fill: ${props => props.theme.gray6};
            &:hover {
            fill: ${props => props.theme.gray8}
            transition: fill 0.6s;
            } 
        }
    }
    .dropdown {
        position: relative;
        display: flex;
        margin-right: 3rem;
        align-self: stretch;
        > button {
            background: none;
            font-size: inherit;
            text-transform: capitalize;
            color: ${props => props.theme.gray5};            
        }
        .items {
            display: none;
            position: absolute;
            top: 41px;
            background-color: ${props => props.theme.gray2};
            min-width: 130px;
            box-shadow: ${props => props.theme.shadow1};
            z-index: 1;
            border-radius: 8px;
            a, p {
            display: block;
            margin: 6px 0;
            padding: 4px;
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
