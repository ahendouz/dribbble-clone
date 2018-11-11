import React from "react";
import styled from "styled-components";

const ComingSoon = () => {
  return (
    <Coming>
      <h1>Coming Soon</h1>
    </Coming>
  );
};
export default ComingSoon;

const Coming = styled.div`
    height: 60.9rem;
    background: ${props => props.theme.gray5};
    color: ${props => props.theme.gray3};
    display: flex;
    justify-content: center;
    align-items: center 
`;
