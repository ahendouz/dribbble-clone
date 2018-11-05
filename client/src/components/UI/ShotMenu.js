import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";

const ShotMenu = () => {
  return (
    <Menu className="shot-menu">
      <ul>
        <Dropdown>
          <button>Following ⌄</button>
          <div className="items">
            <Link to="/coming-soon">Shots You Like</Link>
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

const Menu = Styled.div`
    background: ${props => props.theme.white};
    border: 1px solid ${props => props.theme.gray8};
    color: ${props => props.theme.gray6};
    font-size: 1.52rem;
    @media (max-width: ${props => props.theme.breakPointo}) {
        font-size: 1.22rem
    };
    > ul {
        display: flex
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        @media (max-width: ${props => props.theme.breakPointd}) {
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

const Dropdown = Styled.li`
    position: relative;
    display: flex;
    align-self: stretch;
    > button {
        background: none;
        font-size: inherit;
        color: ${props => props.theme.gray3};
        font-weight: 600           
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
        a, p {
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
}
`;
