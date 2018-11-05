import Styled from "styled-components";

export const Shots = Styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(21rem,1fr));
  grid-auto-flow: row dense;
  grid-gap: 2em;
  grid-auto-rows: auto;
  @media (max-width: ${props => props.theme.breakPointm}) {
    grid-template-columns: repeat(auto-fit,minmax(14rem,1fr));
  };
  @media (max-width: ${props => props.theme.breakPointn}) {
    grid-template-columns: repeat(auto-fit,minmax(13rem,1fr));
  };
  @media (max-width: ${props => props.theme.breakPointc}) {
    grid-template-columns: repeat(auto-fit,minmax(8rem,1fr));
  };
  @media (max-width: ${props => props.theme.breakPointz}) {
    grid-gap: 1em;
  };
`;
