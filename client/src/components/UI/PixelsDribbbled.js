import React from "react";
import styled from "styled-components";

const PixelsDribbbled = () => {
  return (
    <div>
      <figure>
        <Figcaption>
          <img
            src="https://res.cloudinary.com/ahendouz/image/upload/v1541231940/ball-2x-9e3e54dfc28eb6d5851a1f1c9f724109a3991b61e499cc6b1bf41960d4196027.png"
            alt="dribbble"
          />
          <div>
            <h1>2,699,699,707,332</h1>
            <p>pixels dribbbled</p>
          </div>
        </Figcaption>
      </figure>
    </div>
  );
};
export default PixelsDribbbled;

const Figcaption = styled.figcaption`
  display: flex;
  height: 5.8rem;
  margin-top: 2rem;
  > img {
    height: 100%;
    margin-right: 10px;
  }
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    > h1 {
      font-size: 2.3rem;
      margin: -10px 0 3px 0;
      color: ${props => props.theme.gray2}
    }
     > p, h1 {
       line-height: 1;
     }
  }
`;
