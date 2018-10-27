import Styled from "styled-components";

export const UsernameHighlighted = Styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${props => props.theme.highlight1};
  text-transform: capitalize;
`;
