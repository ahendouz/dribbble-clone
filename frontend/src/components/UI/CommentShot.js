import React, { Component } from "react";
import styled from "styled-components";
import { Mutation } from "react-apollo";

import { COMMENT_SHOT } from "../../queries/Mutations";
import { SHOT } from "../../queries/Queries";

import { Form } from "../../styles/Form";
import { PinkBtn } from "../../styles/Buttons";
import SVGicon from "../../icons/SVGicon";

const initialState = {
  comment: ""
};
class CommentShot extends Component {
  state = { ...initialState };

  clearState = () => {
    this.setState({ ...initialState });
  };
  handleChange = event => {
    this.setState({
      comment: event.target.value
    });
  };
  handleSubmit = (event, commentShot) => {
    event.preventDefault();
    commentShot().then(({ data }) => {
      this.clearState();
    });
  };
  render() {
    const { shotId } = this.props;
    const { comment } = this.state;
    const id = shotId;
    return (
      <Mutation
        mutation={COMMENT_SHOT}
        variables={{ comment, shotId }}
        refetchQueries={() => [{ query: SHOT, variables: { id } }]}
      >
        {commentShot => (
          <CommentContainer className="comment">
            <h4 className="title">Add a new comment</h4>
            <CommentForm
              onSubmit={event => this.handleSubmit(event, commentShot)}
            >
              <textarea
                className="commentTextarea"
                onChange={event => this.handleChange(event)}
                value={comment}
              />
              <div className="commentFormDown">
                <PostCommentBtn type="submit">Post comment</PostCommentBtn>
                <div>
                  <SVGicon name="questionMark" className="questionMark" />
                  <span>Some HTML is OK.</span>{" "}
                </div>
              </div>
            </CommentForm>
          </CommentContainer>
        )}
      </Mutation>
    );
  }
}
export default CommentShot;

const CommentContainer = styled.div`
  padding-bottom: 2rem;
  padding: 2rem 0;
  .title {
    color: ${props => props.theme.gray11};
    font-size: 1.7rem;
    line-height: 1;
  }
  .commentFormDown {
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      color: ${props => props.theme.gray12};
      display: flex;
      align-items: center;
      .questionMark {
        fill: ${props => props.theme.gray12};
        width: 16px;
        height: 100%;
        margin-right: 5px;
      }
      span {
        font-size: 1.2rem;
      }
    }
    p {
      color: ${props => props.theme.gray12};
      font-size: 1.2rem;
    }
  }
`;

const CommentForm = styled(Form)`
  padding: 0;
`;
const PostCommentBtn = styled(PinkBtn)`
  font-size: 1.3rem;
  padding: 1.1rem 1.7rem;
`;
