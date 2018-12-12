import React, { Fragment } from "react";
import styled from "styled-components";

import CommentShot from "../UI/CommentShot";
import ShotComment from "../UI/ShotComment";
import { Line } from "../../styles/Line";

const Comment = ({ shotId: id, comments, session }) => {
  return (
    <CommentSide>
      <div className="comments">
        {comments.length > 0 && (
          <h3>{`${comments.length} Response${
            comments.length > 1 ? "s" : ""
          }`}</h3>
        )}
        {comments.map(comment => (
          <Fragment key={comment.id}>
            <ShotComment {...comment} />
            <Line />
          </Fragment>
        ))}
      </div>
      {session && session.getCurrentUser && <CommentShot shotId={id} />}
    </CommentSide>
  );
};

export default Comment;

const CommentSide = styled.div`
  .comments {
    > h3 {
      margin-top: 1rem;
    }
  }
`;
