import React, { Fragment } from "react";
import { Mutation } from "react-apollo";
import { withRouter } from "react-router-dom";

import { LIKEUNLIKESHOT } from "../../queries/Mutations";
import { SHOTS, USER } from "../../queries/Queries";

import SVGicon from "../../icons/SVGicon";
import { LikeBtn } from "../../styles/Buttons";

class LikeShot extends React.Component {
  handleClick = likeUnlikeShot => {
    if (this.props.currentUserId) {
      likeUnlikeShot().then(async ({ data }) => {});
    } else {
      this.props.history.push("/signup");
    }
  };

  render() {
    const { shotId, btnType, currentUserId: id } = this.props;
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
                type="Liked"
                disabled={loading}
                onClick={() => this.handleClick(likeUnlikeShot)}
              >
                <SVGicon name="heart" />
                Liked
              </LikeBtn>
            );
          } else if (btnType === "heart") {
            btn = (
              <button
                type="Liked"
                disabled={loading}
                onClick={() => this.handleClick(likeUnlikeShot)}
                style={{ background: "none", border: "none" }}
              >
                <SVGicon name="heart" fill="#ee4589" />
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
