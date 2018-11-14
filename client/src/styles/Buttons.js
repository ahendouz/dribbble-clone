import styled from "styled-components";

export const DefaultBtn = styled.button`
  font-weight: 600;
  border: none;
  border-radius: 4px;
  font-size: 1.4rem;
  cursor: pointer;
  outline: none;
  text-transform: capitalize;
`;

export const GreenBtn = styled(DefaultBtn)`
  background: ${props => props.theme.highlight3};
  padding: 0.8rem 2.4rem;
  color: white;
`;

export const GrayBtn = styled(DefaultBtn)`
  padding: 0.7rem 1.4rem;
  background: ${props => props.theme.white}

  color: ${props => props => props.theme.gray4};

  border: ${props => `1px solid ${props.theme.gray6}`};
  &:hover {
    border: ${props => `1px solid ${props.theme.gray10}`};
    color: ${props => props.theme.gray11};
  }
`;
export const DarkBtn = styled(DefaultBtn)`
  padding: 0.7rem 1.4rem;
  background: ${props => props.theme.gray14};

  color: ${props => props => props.theme.white};

  &:hover {
    background: ${props => props.theme.gray15};
    color: ${props => props.theme.white};
  }
`;

export const LikeBtn = styled(DefaultBtn)`
  padding: 0.7rem 1.4rem;
  display: flex;
  align-items: center;
  background: ${props =>
    props.type === "Liked"
      ? props => props.theme.highlight2
      : "white"} !important;

  color: ${props =>
    props.type === "Liked" ? "white" : props => props.theme.gray4};

  border: ${props =>
    props.type === "Liked"
      ? `1px solid ${props.theme.highlight2}`
      : `1px solid ${props.theme.gray6}`};
  transition: all 0.2s;

  &:hover {
    box-shadow: ${props =>
      props.type === "Liked" &&
      `inset 0px 0px 20px 0px ${props.theme.highlight2Darker}`};
    border: ${props =>
      props.type !== "Liked" && `1px solid ${props.theme.gray10}`};
    color: ${props => props.type !== "Liked" && `${props.theme.gray11}`};
    & svg {
      fill: ${props => props.type !== "Liked" && props.theme.gray11};
    }
  }
  svg {
    fill: ${props =>
      props.type === "Liked" ? props.theme.white : props.theme.gray4};
    width: 13px;
    height: 13px;
    margin-right: 6px;
    transition: all 0.2s;
  }
`;

export const PinkBtn = styled(DefaultBtn)`
  background: ${props => props.theme.highlight2};
  padding: 1.3rem 3.2rem;
  color: white;
  &:hover {
    box-shadow: ${props =>
      `inset 0px 0px 20px 0px ${props.theme.highlight2Darker}`};
  }
`;
