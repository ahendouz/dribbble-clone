import Styled from "styled-components";

export const FullnameHighlighted = Styled.span`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${props => props.theme.highlight1};
  text-transform: capitalize;
`;
