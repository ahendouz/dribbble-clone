import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";

const Links = () => {
  return (
    <div>
      <h3>
        <Link to="comming-soon">Jobs for Designers</Link>
      </h3>
      <figure>
        <Figcaption>
          <img
            src="https://res.cloudinary.com/ahendouz/image/upload/v1541231806/8f2d2f97b036b8a95157832d05c9a514.png"
            alt="Albert"
          />
          <div>
            <h4>
              <Link to="/">Albert</Link>
            </h4>
            <p>Marketing Designer</p>
          </div>
        </Figcaption>
        <Figcaption>
          <img
            src="https://res.cloudinary.com/ahendouz/image/upload/v1541255021/6d7269b4f45142b4fc08f496b656e4e7.png"
            alt="Mode"
          />
          <div>
            <h4>
              <Link to="/">Mode</Link>
            </h4>
            <p>Director of Designr</p>
          </div>
        </Figcaption>
        <Figcaption>
          <img
            src="https://res.cloudinary.com/ahendouz/image/upload/v1541255142/e5c933e0fafd4a382d217d270ee7558b.png"
            alt="Nooklyn"
          />
          <div>
            <h4>
              <Link to="/">Nooklyn</Link>
            </h4>
            <p>Designer</p>
          </div>
        </Figcaption>
      </figure>
    </div>
  );
};
export default Links;

const Figcaption = Styled.figcaption`
  display: flex;
  height: 3.3rem;
  margin-bottom: 14px;
  > img {
    border-radius: 50%
    height: 100%;
    margin-right: 10px;
  }
  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    > h4 {
      font-size: 1.5rem;
      font-weight: 500;
      color: ${props => props.theme.highlight1}
    }
     > p, h4 {
       line-height: 1;
     }
  }
`;
