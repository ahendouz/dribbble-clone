import React from "react";
import styled from "styled-components";

const SearchItem = ({ title, image, postedBy: { username } }) => {
  return (
    <Shot>
      <div className="shotImage" style={{ backgroundImage: `url(${image})` }} />
      <div className="info">
        <h3>{title}</h3>
        <p>{username}</p>
      </div>
    </Shot>
  );
};
export default SearchItem;

const Shot = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  &:hover {
    background: ${props => props.theme.gray3};
  }
  .shotImage {
    width: 65px;
    height: 47px;
    position: relative;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    border-radius: 2px;
    img {
      width: 100%;
    }
  }
  .info {
    margin-left: 0.7rem;
    width: 117px;
    text-align: left;
    h3 {
      font-size: 1.3rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    p {
      color: ${props => props.theme.gray13};
      font-size: 1.2rem;
    }
  }
`;
