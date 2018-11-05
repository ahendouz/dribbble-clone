import React from "react";
import Styled from "styled-components";
const style = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};
const Loader = () => {
  return (
    <LoaderContainer style={style}>
      <img
        src="https://res.cloudinary.com/ahendouz/image/upload/v1541269766/processing-2x-0d3384cc65db3e0f02be944f2a2e0bae449aaa842597c962cc4318668e4e4f53.gif"
        alt="loader"
      />
    </LoaderContainer>
  );
};
export default Loader;

const LoaderContainer = Styled.div`
    height: 60.9rem;
    /*background: ${props => props.theme.gray5};
    color: ${props => props.theme.gray3};
    display: flex;
    justify-content: center;
    align-items: center  */
`;
