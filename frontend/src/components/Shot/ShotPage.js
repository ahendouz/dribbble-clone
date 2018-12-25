import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { Query } from "react-apollo";

import { SHOT } from "../../queries/Queries";

import Comment from "./Comment";
import EditShotBtn from "../UI/EditShotBtn";
import DeleteShot from "./DeleteShot";

import ShotInfo from "../UI/ShotInfo";
import MoreShots from "../UI/MoreShots";
import ErrorPage from "../Errors/ErrorPage";
import { formatDate } from "../../lib/formatDate";
import LikeShot from "./LikeShot";
import { FullnameHighlighted } from "../../styles/FullnameHighlighted";
import Loader from "../UI/Loader";
import UserImage from "../UI/UserImage";
import { Line } from "../../styles/Line";
import UserHover from "../UI/UserHover";

class ShotPage extends Component {
  render() {
    const { id } = this.props.match.params;
    const { session } = this.props;
    return (
      <Query query={SHOT} variables={{ id }}>
        {({ data, loading, error }) => {
          if (loading) return <Loader />;
          if (error) return <ErrorPage />;
          const {
            id: shotId,
            title,
            description,
            largeImage,
            tags,
            colors,
            comments,
            likes,
            postedBy: { id: userId, profileImage, fullname, shots },
            createdAt
          } = data.shot;
          return (
            <Container>
              <Header>
                <div className="headerContent">
                  <UserHover userId={userId}>
                    <UserImage profileImage={profileImage} size="4rem" />
                  </UserHover>
                  <div className="info">
                    <h2 className="shotName">{title}</h2>
                    <div className="shotInfo">
                      <span style={{ display: "flex" }}>
                        <UserHover userId={userId} session={session}>
                          &nbsp;
                          <Link to={`/${userId}`}>
                            <FullnameHighlighted className="fullname">
                              {fullname}
                            </FullnameHighlighted>
                            &nbsp;
                          </Link>
                        </UserHover>
                        on {formatDate(createdAt)}
                      </span>
                    </div>
                  </div>
                </div>
                <LikeShot
                  shotId={shotId}
                  btnType="button"
                  currentUserId={
                    session &&
                    session.getCurrentUser &&
                    session.getCurrentUser.id
                  }
                />
              </Header>
              <Shot>
                <div className="shot-wrapper">
                  <img src={largeImage} alt="shot" />
                </div>
              </Shot>
              <Description>
                <div className="description-wrapper">
                  <div className="left">
                    <p className="description-text">{description}</p>
                    <Line />
                    <Comment
                      shotId={shotId}
                      comments={comments}
                      session={session}
                    />
                  </div>
                  <div className="right">
                    <ShotInfo colors={colors} likes={likes} tags={tags} />
                    <Line />
                    <MoreShots
                      userId={userId}
                      fullname={fullname}
                      shots={shots}
                    />
                    {session &&
                      session.getCurrentUser !== null &&
                      session.getCurrentUser.id === userId && (
                        <Fragment>
                          <Line />
                          <div className="editOrDelete">
                            <EditShotBtn />
                            <DeleteShot id={shotId} />
                          </div>
                        </Fragment>
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
  .headerContent {
    display: flex;
    align-items: start;
    min-height: 4rem;
    margin: 2rem 0;
    .info {
      margin-left: 1.4rem;
      min-height: 100%;
      display: flex;
      flex-direction: column;
      max-width: 86%;
      .shotName {
        color: ${props => props.theme.gray11};
        font-size: 2rem;
        margin-bottom: 0.7rem;
        margin-top: -0.1rem;
      }
      .shotInfo,
      .shotName {
        line-height: 1;
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
  }
  > button {
    align-self: center;
    margin: 2rem 0;
  }
`;

const Shot = styled.div`
  min-height: 90vh;
  background: ${props => props.theme.white};
  @media (max-width: ${props => props.theme.breakPoint10}) {
    background: none;
  }
  .shot-wrapper {
    padding: 2rem 0;
    @media (max-width: ${props => props.theme.breakPoint10}) {
      padding: 0;
      width: auto;
    }
    > img {
      width: 100%;
      box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
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
      .title {
        padding-bottom: 2rem;
      }
    }
    .right {
      width: 33%;
      @media (max-width: ${props => props.theme.breakPoint9}) {
        width: 100%;
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
