import React, { Fragment } from "react";
import { Mutation } from "react-apollo";
import { withRouter } from "react-router-dom";

import { client } from "../../index";
import { LIKEUNLIKESHOT } from "../../queries/Mutations";
import { SHOTS, USER, ISUSERLIKESHOT } from "../../queries/Queries";

import SVGicon from "../../icons/SVGicon";
import { LikeBtn } from "../../styles/Buttons";

class LikeShot extends React.Component {
  state = {
    isLiked: false
  };
  componentDidMount = () => {
    const { shotId } = this.props;
    client
      .query({ query: ISUSERLIKESHOT, variables: { shotId } })
      .then(({ data: { isUserLikeShot } }) =>
        this.setState({ isLiked: isUserLikeShot })
      );
  };
  handleClick = likeUnlikeShot => {
    if (this.props.currentUserId) {
      likeUnlikeShot().then(async ({ data }) => {});
      this.setState({ isLiked: !this.state.isLiked });
    } else {
      this.props.history.push("/signup");
    }
  };

  render() {
    const { shotId, btnType, currentUserId: id } = this.props;
    const { isLiked } = this.state;
    return (
      <Mutation
        mutation={LIKEUNLIKESHOT}
        variables={{ shotId }}
        refetchQueries={() => [
          { query: SHOTS },
          { query: USER, variables: { id } }
        ]}
      >
        {(likeUnlikeShot, { loading }) => {
          let btn;
          if (btnType === "button") {
            btn = (
              <LikeBtn
                type={isLiked ? "Liked" : "Like"}
                disabled={loading}
                onClick={() => this.handleClick(likeUnlikeShot)}
              >
                <SVGicon name="heart" />
                {isLiked ? "Liked" : "Like"}
              </LikeBtn>
            );
          } else if (btnType === "heart") {
            btn = (
              <button
                type={isLiked ? "Liked" : "Like"}
                disabled={loading}
                onClick={() => this.handleClick(likeUnlikeShot)}
                style={{ background: "none", border: "none" }}
              >
                <SVGicon
                  name="heart"
                  fill={id ? (isLiked ? "#ee4589" : "#bbbbbb") : "#bbbbbb"}
                />
              </button>
            );
          }
          return <Fragment>{btn}</Fragment>;
        }}
      </Mutation>
    );
  }
}
export default withRouter(LikeShot);
