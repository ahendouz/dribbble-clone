import React from "react";
import styled from "styled-components";

const ShotColor = ({ hex }) => {
  return <Color background={hex} />;
};
export default ShotColor;

const Color = styled.li`
  width: 3.9rem;
  height: 1.8rem;
  background-color: ${props => props.background};
  transition: all 0.2s;
  &:hover {
    transform: scale(1.5);
  }
`;
