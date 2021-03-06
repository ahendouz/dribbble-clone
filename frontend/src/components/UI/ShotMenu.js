import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import SVGicon from "../../icons/SVGicon";

const ShotMenu = ({ session }) => {
  return (
    <Menu className="shot-menu">
      <ul>
        <Dropdown>
          <button>
            Following <SVGicon name="downArrow" />
          </button>
          <div className="items">
            <Link to={`${session.getCurrentUser.username}/likes`}>
              Shots You Like
            </Link>
          </div>
        </Dropdown>
        <li>
          <Link to="/coming-soon">Activity</Link>
        </li>
        <li>
          <Link to="/coming-soon">Suggestions</Link>
        </li>
        <li>
          <Link to="/coming-soon">Find Friends</Link>
        </li>
        <li>
          <Link to="/coming-soon">Subscribe via Email</Link>
        </li>
      </ul>
    </Menu>
  );
};

export default ShotMenu;

const Menu = styled.div`
  background: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.gray8};
  color: ${props => props.theme.gray6};
  font-size: 1.45rem;
  @media (max-width: ${props => props.theme.breakPoint12}) {
    /* HERE */
    font-size: 1.22rem;
  }
  > ul {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    @media (max-width: ${props => props.theme.breakPoint15}) {
      max-width: 34rem;
      flex-wrap: wrap;
    }
    li {
      padding: 1.1rem 0;
    }
    li:not(:last-of-type) {
      margin-right: 1.9rem;
    }
    li:last-of-type {
      color: ${props => props.theme.highlight1};
    }
  }
`;

const Dropdown = styled.li`
  position: relative;
  display: flex;
  align-self: stretch;
  > button {
    background: none;
    font-size: inherit;
    color: ${props => props.theme.gray3};
    font-weight: 600;
    > svg {
      fill: ${props => props.theme.gray6};
      width: 8px;
    }
  }
  .items {
    display: none;
    position: absolute;
    top: 40px;
    background-color: ${props => props.theme.white};
    min-width: 159px;
    box-shadow: ${props => props.theme.shadow3};
    z-index: 1;
    border-radius: 3px;
    a,
    p {
      display: block;
      margin: 6px 0;
      padding: 4px;
      color: ${props => props.theme.gray6};
      &:hover {
        background-color: #dddddd4d;
      }
    }
  }
  &:hover {
    .items {
      display: block;
    }
  }
`;
