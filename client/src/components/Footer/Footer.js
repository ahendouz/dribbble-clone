import React from "react";
import Styled from "styled-components";

import Dribbble from "../UI/Dribbble";
import Links from "../UI/Links";
import Hiring from "../UI/Hiring";
import JobsForDesigners from "../UI/JobsForDesigners";
import PixelsDribbbled from "../UI/PixelsDribbbled";

const Footer = () => {
  return (
    <FooterContainer className="container">
      <div>
        <Top>
          <Dribbble />
          <div className="middle">
            <Links />
            <Hiring />
            <JobsForDesigners />
          </div>
          <PixelsDribbbled />
        </Top>
        <CopyRight>
          &copy; {new Date().getFullYear()} Dribbble. All rights reserved.
        </CopyRight>
      </div>
    </FooterContainer>
  );
};
export default Footer;

const FooterContainer = Styled.div`
  background: ${props => props.theme.white};
  padding: 3rem 0;
  font-size: 1.3rem;
  border-top: 1px solid ${props => props.theme.gray8};
  > p {
    padding-top: 2rem;
  }
  /* HERE */
  @media (max-width: ${props => props.theme.breakPoint12}) {
    font-size: 1.2rem;
  };
  > div {
    margin: 0 auto;
    width: 200rem;
    @media (max-width: ${props => props.theme.breakPoint2}) {
      width: 175rem;
    };
    @media (max-width: ${props => props.theme.breakPoint3}) {
      width: 150rem;
    };
    @media (max-width: ${props => props.theme.breakPoint4}) {
      width: 125rem;
    };
    @media (max-width: ${props => props.theme.breakPoint5}) {
      width: 100rem;
    };
    @media (max-width: ${props => props.theme.breakPoint8}) {
      width: 75rem;
    };
    @media (max-width: ${props => props.theme.breakPoint12}) {
      width: 63rem;
    };
    @media (max-width: ${props => props.theme.breakPoint13}) {
      padding: 2rem;
      width: auto;
    };
  }
`;

const Top = Styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: ${props => props.theme.breakPoint8}) {
    flex-direction: column;
  }
  > div {
    h3 {
      padding-bottom: 7px;
      color: ${props => props.theme.gray5}
      font-weight: 500
    }
  }
  > div:first-of-type {
    width: 20%
    @media (max-width: ${props => props.theme.breakPoint8}) {
      width: 30%
      margin-bottom: 2.3rem
    }
    @media (max-width: ${props => props.theme.breakPoint12}) {
      width: 80%
    }
  }
  > div:nth-of-type(2) {
    width: 50%;
    display: flex;
    justify-content: space-around;
    @media (max-width: ${props => props.theme.breakPoint8}) {
      flex-direction: column;
    }
    > div {
      margin-bottom: 2.3rem
    }
  }
  > div:last-of-type {
    min-width: 20%
  }
`;

const CopyRight = Styled.p`
  padding-top: 2rem;
`;
