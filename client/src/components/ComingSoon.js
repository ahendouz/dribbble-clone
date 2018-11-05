import React from "react";
import Styled from "styled-components";

const ComingSoon = () => {
  return (
    <Coming>
      <h1>Coming Soon</h1>
    </Coming>
  );
};
export default ComingSoon;

const Coming = Styled.div`
    height: 60.9rem;
    background: ${props => props.theme.gray5};
    color: ${props => props.theme.gray3};
    display: flex;
    justify-content: center;
    align-items: center 
`;
