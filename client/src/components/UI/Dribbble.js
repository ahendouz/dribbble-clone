import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";

import Logo from "../UI/Logo";
import SVGicon from "../SVGicon";

const Dribbble = () => {
  return (
    <Container>
      <Logo className="logo" name="dribbble-logo" width={79} height={20} />
      <h3>Show and tell for designers</h3>
      <p>
        What are you working on? Dribbble is a community of designers sharing
        screenshots of their work, process, and projects.
      </p>
      <div className="icons">
        <Link to="/coming-soon">
          <SVGicon className="icon" name="dribbble-ball" />
        </Link>
        <a href="http://twitter.com/dribbble" target="blank">
          <SVGicon className="icon" name="twitter" />
        </a>
        <a href="http://facebook.com/dribbble" target="blank">
          <SVGicon className="icon" name="facebook" />
        </a>
        <a href="http://instagram.com/dribbble" target="blank">
          <SVGicon className="icon" name="instagram" />
        </a>
        <Link to="/">
          <SVGicon className="icon" name="world" />
        </Link>
      </div>
    </Container>
  );
};
export default Dribbble;

const Container = Styled.div`
  .logo {
    fill: ${props => props.theme.gray5}
    svg:hover {
      fill: ${props => props.theme.gray6}
      transition: fill 0.3s;
    } 
  }
  > p {
    padding: 0.8rem 0 2.1rem
  }
  .icons {
    .icon {
      fill: ${props => props.theme.gray6}
      width: 22px;
      height: 22px;
      margin-right: 1.6rem;
      transition: all .3s
      &:hover {
        fill: ${props => props.theme.gray3}
      }
    }
  }
`;
