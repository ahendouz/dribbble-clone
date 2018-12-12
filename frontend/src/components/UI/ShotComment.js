import React from "react";
import styled from "styled-components";
import SmallUserImage from "../UI/SmallUserImage";

const ShotComment = ({ comment, commentedBy: { fullname, profileImage } }) => {
  return (
    <Comment>
      <SmallUserImage profileImage={profileImage} size="3rem" />

      <div className="right-side">
        <h2 className="userName">{fullname}</h2>
        <div className="comment">{comment}</div>
      </div>
    </Comment>
  );
};

export default ShotComment;

const Comment = styled.div`
  display: flex;
  align-items: center;
  margin: 2.4rem 0;
  > div:first-of-type {
    align-self: start;
  }
  .right-side {
    margin-left: 1.4rem;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    max-width: 86%;
    .userName {
      text-transform: capitalize;
      color: ${props => props.theme.gray11};
      font-size: 1.55rem;
      margin-bottom: 0.7rem;
      margin-top: -0.1rem;
      line-height: 1;
    }
    .comment,
    .userName {
      line-height: 1;
    }
    .comment {
      display: flex;
      font-size: 1.4rem;
      color: ${props => props.theme.gray12};
    }
  }
`;
