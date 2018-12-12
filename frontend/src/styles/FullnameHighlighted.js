import styled from "styled-components";

export const FullnameHighlighted = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${props => props.theme.highlight1};
  text-transform: capitalize;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.highlight7};
  }
`;
