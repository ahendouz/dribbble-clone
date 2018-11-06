import Styled from "styled-components";

export const Shots = Styled.div`
  max-width: 100%;
  width: 200rem;
  @media (max-width: ${props => props.theme.breakPoint1}) {
      width: 200rem;
  };
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
    width: 50rem;
  };
  @media (max-width: ${props => props.theme.breakPoint15}) {
    padding: 2rem;
  };
  @media (max-width: ${props => props.theme.breakPoint17}) {
    padding: 1rem;
  };
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(21rem,1fr));
    grid-auto-flow: row dense;
    grid-gap: 2em;
    grid-auto-rows: auto;
    @media (max-width: ${props => props.theme.breakPoint16}) {
      grid-template-columns: repeat(auto-fit,minmax(14rem,1fr));
    };
    @media (max-width: ${props => props.theme.breakPoint17}) {
      grid-template-columns: repeat(auto-fit,minmax(13rem,1fr));
    };
    @media (max-width: ${props => props.theme.breakPoint20}) {
      grid-template-columns: repeat(auto-fit,minmax(8rem,1fr));
    };
    @media (max-width: ${props => props.theme.breakPoint21}) {
      grid-gap: 1em;
    };
  }
`;
