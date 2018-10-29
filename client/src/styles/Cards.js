import Styled from "styled-components";

export const Cards = Styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(21rem,1fr));
  grid-auto-flow: row dense;
  grid-gap: 2em;
  grid-auto-rows: auto;
`;
