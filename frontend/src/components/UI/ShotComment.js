import React from "react";
import styled from "styled-components";
import UserImage from "../UI/UserImage";
import UserHover from "./UserHover";

const ShotComment = ({
  comment,
  commentedBy: { id: userId, fullname, profileImage }
}) => {
  return (
    <Comment>
      <UserHover userId={userId}>
        <UserImage profileImage={profileImage} size="3rem" />
      </UserHover>

      <div className="right-side">
        <UserHover userId={userId}>
          <h2 className="userName">{fullname}</h2>
        </UserHover>
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
