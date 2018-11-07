import React from "react";
import Styled from "styled-components";

const ShotColor = ({ hex }) => {
  return <Color background={hex} />;
};
export default ShotColor;

const Color = Styled.li`
  width: 3.9rem;
  height: 1.8rem;
  background-color: ${props => props.background}
  transition: all .2s; 
  &:hover {
    transform: scale(1.5)
  }
`;
