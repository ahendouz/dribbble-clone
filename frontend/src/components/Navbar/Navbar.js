import React, { Component } from "react";
import styled from "styled-components";

import Logo from "../UI/Logo";
import Search from "../Search/Search";
import NavbarLinks from "./NavbarLinks";
import NavbarAuth from "./NavbarAuth";
import NavbarUnAuth from "./NavbarUnAuth";
import SVGicon from "../../icons/SVGicon";

class Navbar extends Component {
  state = {
    toggle: false
  };

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };

  render() {
    const { session } = this.props;
    return (
      <Container>
        <Nav session={session}>
          <div onClick={this.toggle}>
            <SVGicon className="navicon" name="nav" />
          </div>
          <Logo name="dribbble-logo" />
          <NavbarLinks />
          {session && session.getCurrentUser ? (
            <NavbarAuth session={session} />
          ) : (
            <NavbarUnAuth />
          )}
          <div className="search-big-scree">
            <Search />
          </div>
        </Nav>
        <NavMenu className={this.state.toggle ? "visibleMenu" : "hiddenMenu"}>
          <Search />
          <NavbarLinks />
        </NavMenu>
      </Container>
    );
  }
}

export default Navbar;

const Container = styled.div`
  background: ${props => props.theme.gray2};
  .search {
    position: relative;
    input {
      border: none;
      border-radius: 4px;
      color: ${props => props.theme.gray6};
    }
    input::placeholder {
      color: inherit;
    }
    svg {
      position: absolute;
      fill: ${props => props.theme.gray6};
    }
  }
  .hiddenMenu {
    display: none;
  }
  .visibleMenu {
    display: block;
    text-align: center;
  }
`;

const NavMenu = styled.div`
  padding: 0 2rem;
  @media (min-width: ${props => props.theme.breakPoint9}) {
    display: none !important;
  }
  .search {
    padding-bottom: 1rem;
    input {
      font-size: 1.3rem;
      width: 100%;
      padding: 1rem 0 1rem 30px;
    }
    svg {
      top: 11px;
      left: 1%;
      width: 17px;
      height: 17px;
    }
  }
  .links {
    flex-direction: column;
    text-align: start;
    margin-left: 0;
    > li {
      border-top: 1px solid ${props => props.theme.gray3};
      width: 100%;
      padding: 1.2rem 0;
      > a {
        display: flex;
      }
    }
  }
`;

const Nav = styled.nav`
  color: ${props => props.theme.gray5};
  font-size: 1.3rem;
  height: 5.7rem;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  padding: 0 30px;
  position: relative;
  @media (max-width: ${props => props.theme.breakPoint9}) {
    height: 4.2rem;
    justify-content: space-between;
  }
  @media (max-width: ${props => props.theme.breakPoint15}) {
    padding: 0 9px;
  }
  .navicon {
    display: none;
    fill: ${props => props.theme.gray6};
    width: 17px;
    height: 100%;
    @media (max-width: ${props => props.theme.breakPoint9}) {
      display: block;
    }
  }
  .dribbble-logo {
    svg {
      line-height: 1.1;
      width: 79px;
      height: 20px;
      fill: ${props => props.theme.white};
    }
    @media (max-width: ${props => props.theme.breakPoint9}) {
      display: flex;
      justify-content: center;
      /* padding-left: 35px; */
      padding-left: ${props =>
        props.session && props.session.getCurrentUser ? "35px" : "91px"};
    }
    > svg:hover {
      fill: ${props => props.theme.gray6};
      transition: fill 0.6s;
    }
  }
  .links {
    @media (max-width: ${props => props.theme.breakPoint9}) {
      display: none;
    }
  }
  .search-big-scree {
    @media (max-width: ${props => props.theme.breakPoint9}) {
      display: none;
    }
    search {
      width: 215px;
    }
  }
  .search {
    width: 215px;
    .search {
      input {
        width: 100%;
      }
    }
    input {
      font-size: 1.3rem;
      padding: 2.7px 0 2.9px 23px;
    }
    svg {
      top: 4.2px;
      left: 3%;
      width: 14px;
      height: 14px;
    }
  }
`;
