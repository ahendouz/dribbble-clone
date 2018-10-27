import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";
import { Mutation } from "react-apollo";

import { LIKE_SHOT, UNLIKE_SHOT, GET_SHOT } from "../../queries";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import withSession from "../withSession.js";
import { LikeBtn } from "../../styles/Buttons";

class LikeShot extends Component {
  state = {
    liked: false,
    username: ""
  };

  componentDidMount() {
    if (this.props.session.getCurrentUser) {
      const { username, favorites } = this.props.session.getCurrentUser;
      const { _id } = this.props;
      const prevLiked =
        favorites.findIndex(favorite => favorite._id === _id) > -1;
      //   console.log(prevLiked);
      this.setState({ username, liked: prevLiked });
    }
  }

  handleClick = (likeShot, unlikeShot) => {
    if (this.state.username) {
      this.setState(
        prevState => ({
          liked: !prevState.liked
        }),
        () => this.handleLike(likeShot, unlikeShot)
      );
    }
  };

  handleLike = (likeShot, unlikeShot) => {
    if (this.state.liked) {
      likeShot().then(async ({ data }) => {
        // console.log(data);
        await this.props.refetch();
      });
    } else {
      unlikeShot().then(async ({ data }) => {
        // console.log(data);
        await this.props.refetch();
      });
    }
  };

  updateLike = (cache, { data: { likeShot } }) => {
    const { _id } = this.props;
    const { getShot } = cache.readQuery({
      query: GET_SHOT,
      variables: { _id }
    });
    cache.writeQuery({
      query: GET_SHOT,
      variables: { _id },
      data: {
        getShot: { ...getShot, likes: likeShot.likes + 1 }
      }
    });
  };

  updateUnlike = (cache, { data: { unlikeShot } }) => {
    const { _id } = this.props;
    const { getShot } = cache.readQuery({
      query: GET_SHOT,
      variables: { _id }
    });
    cache.writeQuery({
      query: GET_SHOT,
      variables: { _id },
      data: {
        getShot: { ...getShot, likes: unlikeShot.likes - 1 }
      }
    });
  };

  render() {
    const { username, liked } = this.state;
    const { _id, btnType } = this.props;
    return (
      <Mutation
        mutation={UNLIKE_SHOT}
        variables={{ _id, username }}
        update={this.updateUnlike}
      >
        {unlikeShot => (
          <Mutation
            mutation={LIKE_SHOT}
            variables={{ _id, username }}
            update={this.updateLike}
          >
            {likeShot => {
              let btn;
              btnType === "button" ? (
                (btn = (
                  <LikeBtn
                    type={liked ? "Liked" : "Like"}
                    onClick={() => this.handleClick(likeShot, unlikeShot)}
                  >
                    {liked ? "Liked" : "Like"}
                  </LikeBtn>
                ))
              ) : btnType === "heart" ? (
                (btn = (
                  <div
                    type={liked ? "Liked" : "Like"}
                    onClick={() => this.handleClick(likeShot, unlikeShot)}
                  >
                    <FontAwesomeIcon
                      style={
                        username
                          ? liked
                            ? { color: "#ee4589", fontSize: "1.2rem" }
                            : { color: "#bbbbbb", fontSize: "1.2rem" }
                          : { color: "#bbbbbb", fontSize: "1.2rem" }
                      }
                      icon="heart"
                    />
                  </div>
                ))
              ) : (
                <button>like</button>
              );
              return username ? (
                <Fragment>{btn}</Fragment>
              ) : (
                <Link to="/signup">{btn}</Link>
              );
            }}
          </Mutation>
        )}
      </Mutation>
    );
  }
}
export default withSession(LikeShot);
