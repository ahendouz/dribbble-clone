import Styled from "styled-components";

export const DefaultBtn = Styled.button`
  font-weight: 600;
  border: none;
  border-radius: 7px;
  font-size: 1.4rem;
  cursor: pointer;
  outline: none;
  text-transform: capitalize;
`;

export const GreenBtn = Styled(DefaultBtn)`
  background: ${props => props.theme.highlight3};
  padding: 0.8rem 2.4rem;
  color: white;
`;

export const LikeBtn = Styled(DefaultBtn)`
  padding: 0.8rem 2.4rem;
  background: ${props =>
    props.type == "Liked"
      ? props => props.theme.highlight2
      : "white"} !important;
  color: ${props =>
    props.type == "Liked" ? "white" : props => props.theme.gray4};
  border: ${props =>
    props.type == "Liked"
      ? `1px solid ${props.theme.highlight2}`
      : `1px solid ${props.theme.gray5}`} 
`;

export const PinkBtn = Styled(DefaultBtn)`
  background: ${props => props.theme.highlight2};
  padding: 1.3rem 3.2rem;
  color: white;
`;
