import React from "react";
import { Link } from "react-router-dom";
import posed from "react-pose";
import Styled from "styled-components";

import { formatDate } from "../Profile/UserInfo";

export default ({
  _id,
  imageUrl,
  name,
  description,
  createDate,
  likes,
  username
}) => {
  // console.log(_id)
  return (
    <Card>
      <div>
        <div>
          <img src={imageUrl} />
          <Link to={`/shot/${_id}`}>
            <div>
              <h4>{name}</h4>
              <p>{description}</p>
              <p>{formatDate(createDate)}</p>
            </div>
          </Link>
        </div>
        <div>
          <Link to={`/shot/${_id}`}>
            <p>{name}</p>
          </Link>
        </div>
      </div>
      <h3>{username}</h3>
    </Card>
  );
};

const Card = Styled.li`
/* text-align: left; */
  > h3 {
    color: #1e6189ab;
    font-size: 1.3rem;
    text-transform: capitalize;
    padding-top: 0.8rem;
    padding-left: 2rem;
  }
  > div { /* the child of card*/
    padding: 1.3rem 1.3rem 0 1.3rem;
    box-shadow: 0 1px 2px rgba(0,0,0,0.07);
    > div:first-of-type {
      position: relative;
      overflow: hidden;
      img {
        width: 100%
      } 
      &:hover div {
        visibility: visible
      }
       div {
          background-color: white;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 98%;
          visibility: hidden;
          /* transition: visibility 0.3s ease-in-out; */
          display: flex;
          flex-direction: column;
          text-align: start;
          justify-content: space-around;
          padding: 1rem;
          > h4 {
            font-size: 1.5rem;
            color: #444;
          }
          p {
            font-weight: 100
          }

      }
    }
    > div:last-of-type { /* card text*/
      padding: 0.2rem 0 0.8rem 0;
      font-size: 1.1rem
    }
  }
`;
