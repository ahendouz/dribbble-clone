import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { Query, Mutation } from "react-apollo";
import { ColorExtractor } from "react-color-extractor";

import {
  GET_SHOT,
  DELETE_USER_SHOT,
  GET_ALL_SHOTS,
  GET_USER_SHOTS,
  GET_CURRENT_USER
} from "../../queries";

import ErrorPage from "../ErrorPage";
import { formatDate } from "../formatDate.js";
import LikeShot from "./LikeShot";
import SVGicon from "../SVGicon";
import { FullnameHighlighted } from "../../styles/FullnameHighlighted";
import { PinkBtn } from "../../styles/Buttons";
import Loader from "../UI/Loader";
import ShotColor from "../UI/ShotColor";
import SVGIcon from "../SVGicon";
import { Form } from "../../styles/Form";
import { Line } from "../../styles/Line";

class ShotPage extends Component {
  state = { colors: [] };

  getColors = colors =>
    this.setState(state => ({ colors: [...state.colors, ...colors] }));

  handleDelete = deleteUserShot => {
    const confirmDelete = window.confirm(
      "⚠️ Are you sure you want to delete this shot? ⚠️"
    );
    if (confirmDelete) {
      deleteUserShot().then(({ data }) => {
        // console.log(data);
        this.props.history.push("/");
      });
    }
  };

  render() {
    const { _id } = this.props.match.params;
    const { session } = this.props;
    return (
      <Query query={GET_SHOT} variables={{ _id }}>
        {({ data, loading, error }) => {
          if (loading) return <Loader />;
          if (error) return <ErrorPage />;
          const {
            _id,
            largeImage,
            name,
            description,
            createDate,
            likes,
            username,
            fullname
          } = data.getShot;
          return (
            <Container>
              <Header>
                <div className="headerContent">
                  <h2 className="shotName">{name}</h2>
                  <div className="shotInfo">
                    <span>
                      by{" "}
                      <FullnameHighlighted className="fullname">
                        {fullname}
                      </FullnameHighlighted>{" "}
                      on {formatDate(createDate)}
                    </span>
                  </div>
                </div>
                <LikeShot _id={_id} btnType="button" />
              </Header>
              <Shot>
                <div className="shot-wrapper">
                  <ColorExtractor getColors={this.getColors}>
                    <img src={largeImage} alt="shot" />
                  </ColorExtractor>
                </div>
              </Shot>
              <Description>
                <div className="description-wrapper">
                  <div className="left">
                    <p className="description-text">{description}</p>
                    <Line />
                    <div className="comment">
                      <h4 className="title">Add a new comment</h4>
                      <CommentForm>
                        <textarea className="commentTextarea" />
                        <div className="commentFormDown">
                          <PostCommentBtn>Post comment</PostCommentBtn>
                          <div>
                            <SVGicon
                              name="questionMark"
                              className="questionMark"
                            />
                            <span>Some HTML is OK.</span>{" "}
                          </div>
                        </div>
                      </CommentForm>
                    </div>
                  </div>
                  <div className="right">
                    <div className="shotColors">
                      <SVGicon name="palette" className="paletteIcon" />
                      <ul className="colors">
                        {this.state.colors.map(color => (
                          <ShotColor key={color} hex={color} />
                        ))}
                      </ul>
                    </div>
                    <div className="likes">
                      <SVGicon name="heart" className="heartIcon" />
                      <span className="likeNum">{likes} likes</span>
                    </div>
                    <Line />
                    {session.getCurrentUser !== null &&
                      session.getCurrentUser.username === username && (
                        <Mutation
                          mutation={DELETE_USER_SHOT}
                          variables={{ _id }}
                          refetchQueries={() => [
                            { query: GET_ALL_SHOTS },
                            { query: GET_CURRENT_USER }
                          ]}
                          update={(cache, { data: { deleteUserShot } }) => {
                            const { getUserShots } = cache.readQuery({
                              query: GET_USER_SHOTS,
                              variables: { username }
                            });
                            cache.writeQuery({
                              query: GET_USER_SHOTS,
                              variables: { username },
                              data: {
                                getUserShots: getUserShots.filter(
                                  shot => shot._id !== deleteUserShot._id
                                )
                              }
                            });
                          }}
                        >
                          {(deleteUserShot, attrs = {}) => (
                            <div className="editOrDelete">
                              <Link
                                to={`${this.props.location.pathname}/edit`}
                                className="edit"
                              >
                                <SVGIcon
                                  name="settings"
                                  className="settingsIcon"
                                />
                                &nbsp;
                                <p> Edit</p>
                              </Link>
                              <div
                                className="delete"
                                onClick={() =>
                                  this.handleDelete(deleteUserShot)
                                }
                              >
                                <SVGIcon name="delete" className="deleteIcon" />
                                &nbsp;
                                <p>
                                  Delet
                                  {attrs.loading ? "ing" : "e"}
                                </p>
                              </div>
                            </div>
                          )}
                        </Mutation>
                      )}
                  </div>
                </div>
              </Description>
            </Container>
          );
        }}
      </Query>
    );
  }
}

export default withRouter(ShotPage);

const Container = styled.div`
  font-size: 1.3rem;
  display: flex;
  flex-direction: column;
  > div:nth-of-type(1),
  div:nth-of-type(2) .shot-wrapper,
  div:nth-of-type(3) .description-wrapper {
    width: 80rem;
    margin: 0 auto;
    max-width: 100%;
  }
`;

const Header = styled.div`
  background: ${props => props.theme.grey7};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 2rem 0;
  @media (max-width: ${props => props.theme.breakPoint10}) {
    padding: 2rem 2rem;
    width: auto;
  }
  .headerContent {
    .shotName {
      color: ${props => props.theme.gray11};
      font-size: 2rem;
    }
    .shotInfo {
      display: flex;
      font-size: 1.4rem;
      color: ${props => props.theme.gray12};
      .fullname {
        margin-top: -0.1px;
        font-size: 1.4rem;
      }
    }
  }
  > button {
    align-self: center;
  }
`;

const Shot = styled.div`
  background: ${props => props.theme.white};
  @media(max-width: ${props => props.theme.breakPoint10}) {
    background: none;
  }
  .shot-wrapper {
    padding: 2rem 0;
    @media(max-width: ${props => props.theme.breakPoint10}) {
      padding: 0;
      width: auto;
    }
    > img {
      width: 100%
      box-shadow: 0 0 1px rgba(0,0,0,0.2);
    }
  }
`;

const Description = styled.div`
  padding: 3rem 0;
  flex: 1;
  @media (max-width: ${props => props.theme.breakPoint10}) {
    padding: 2rem 2rem;
    width: auto;
  }
  .description-wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 2rem 0;
    @media (max-width: ${props => props.theme.breakPoint9}) {
      flex-direction: column;
    }
    .left {
      width: 60%;
      color: ${props => props.theme.gray10};
      font-size: 1.5rem;
      @media (max-width: ${props => props.theme.breakPoint9}) {
        width: 100%;
      }
      .description-text,
      .comment .title {
        padding-bottom: 2rem;
      }
      .comment {
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
              height: auto;
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
      }
    }
    .right {
      @media (max-width: ${props => props.theme.breakPoint9}) {
        width: 100%;
      }
      .shotColors,
      .likes {
        display: flex;
        align-items: center;
        padding-bottom: 2rem;
        color: ${props => props.theme.gray12};
        .paletteIcon,
        .heartIcon {
          margin-right: 1rem;
          fill: ${props => props.theme.gray12};
          width: 15px;
          height: 100%;
        }
        .likeNum {
          font-size: 1.4rem;
        }
      }
      .shotColors {
        .colors {
          display: flex;
        }
      }
      .editOrDelete {
        padding-top: 2rem;
        .edit,
        .delete {
          display: flex;
          align-items: center;
          color: ${props => props.theme.gray6};
          transition: color 0.2s;
          cursor: pointer;
          p {
            line-height: 1;
          }
          &:hover {
            color: ${props => props.theme.gray4};
            & .settingsIcon,
            .deleteIcon {
              fill: ${props => props.theme.gray4};
            }
          }
          .settingsIcon,
          .deleteIcon {
            fill: ${props => props.theme.gray6};
            width: 13px;
            height: 100%;
            transition: fill 0.2s;
          }
        }
        .edit {
          padding-bottom: 3px;
        }
      }
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
