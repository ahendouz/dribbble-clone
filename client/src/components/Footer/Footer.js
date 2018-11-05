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
  @media (max-width: ${props => props.theme.breakPointo}) {
    font-size: 1.2rem;
  };
  > div {
    margin: 0 auto;
    @media (max-width: ${props => props.theme.breakPointw}) {
      width: 200rem;
    };
    @media (max-width: ${props => props.theme.breakPointe}) {
      width: 175rem;
    };
    @media (max-width: ${props => props.theme.breakPointt}) {
      width: 150rem;
    };
    @media (max-width: ${props => props.theme.breakPointy}) {
      width: 125rem;
    };
    @media (max-width: ${props => props.theme.breakPointu}) {
      width: 100rem;
    };
    @media (max-width: ${props => props.theme.breakPointa}) {
      width: 75rem;
    };
    @media (max-width: ${props => props.theme.breakPointo}) {
      width: 63rem;
    };
    @media (max-width: ${props => props.theme.breakPointh}) {
      padding: 2rem;
      width: auto;
    };
  }
`;

const Top = Styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: ${props => props.theme.breakPointa}) {
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
    @media (max-width: ${props => props.theme.breakPointa}) {
      width: 30%
      margin-bottom: 2.3rem
    }
    @media (max-width: ${props => props.theme.breakPointo}) {
      width: 80%
    }
  }
  > div:nth-of-type(2) {
    width: 50%;
    display: flex;
    justify-content: space-around;
    @media (max-width: ${props => props.theme.breakPointa}) {
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
