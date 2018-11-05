import React from "react";
import { withRouter } from "react-router-dom";
import Styled from "styled-components";
import { Query } from "react-apollo";

import { GET_SHOT } from "../../queries";

import ErrorPage from "../ErrorPage";
import { formatDate } from "../formatDate.js";
import LikeShot from "./LikeShot";
import SVGicon from "../SVGicon";
import { UsernameHighlighted } from "../../styles/UsernameHighlighted";
import Loader from "../UI/Loader";
import ShotColors from "../UI/ShotColors";

const ShotPage = ({ match }) => {
  const { _id } = match.params;
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
          username
        } = data.getShot;
        return (
          <Container>
            <Header>
              <div className="headerContent">
                <h2 className="shotName">{name}</h2>
                <div className="shotInfo">
                  <span>
                    by{" "}
                    <UsernameHighlighted className="username">
                      {username}
                    </UsernameHighlighted>{" "}
                    on {formatDate(createDate)}
                  </span>
                </div>
              </div>
              <LikeShot _id={_id} btnType="button" />
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
                  <p className="likes">
                    <SVGicon name="heart" className="heartIcon" />
                    <span className="likeNum">{likes} likes</span>
                  </p>
                </div>
                <div className="right">
                  <SVGicon name="palette" className="paletteIcon" />
                  <ShotColors />
                </div>
              </div>
            </Description>
          </Container>
        );
      }}
    </Query>
  );
};
export default withRouter(ShotPage);

const Container = Styled.div`
  font-size: 1.3rem;
  display: flex;
  flex-direction: column;
  > div:nth-of-type(1), div:nth-of-type(2) .shot-wrapper, div:nth-of-type(3) .description-wrapper {
    width: 80rem;
    margin: 0 auto;
    max-width: 100%;
  }
`;

const Header = Styled.div`
  background: ${props => props.theme.grey7};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 2rem 0;
  @media(max-width: ${props => props.theme.breakPointl}) {
    padding: 2rem 2rem;
    width: auto;
  }
  .headerContent {
    .shotName {
      color: ${props => props.theme.gray3};
    }
    .shotInfo {
      display: flex;
      .username {
        margin-top: -0.1px;
      }
    }
  }
  > button {
    align-self: center
  }
`;

const Shot = Styled.div`
  background: ${props => props.theme.white};
  @media(max-width: ${props => props.theme.breakPointl}) {
    background: none;
  }
  .shot-wrapper {
    padding: 2rem 0;
    @media(max-width: ${props => props.theme.breakPointl}) {
      padding: 0;
      width: auto;
    }
    > img {
      width: 100%
      box-shadow: 0 0 1px rgba(0,0,0,0.2);
    }
  }
`;

const Description = Styled.div`
  padding: 3rem 0;
  flex: 1;
  @media(max-width: ${props => props.theme.breakPointl}) {
    padding: 2rem 2rem;
    width: auto;
  };
  .description-wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 2rem 0;
    @media(max-width:  ${props => props.theme.breakPoint2}) {
      flex-direction: column;
    }
    .left {
      width: 60%;
      color: ${props => props.theme.gray4};
      font-size: 1.5rem;
      @media(max-width:  ${props => props.theme.breakPoint2}) {
        width: 100%;
      }
      .description-text {
        border-bottom: 1px solid ${props => props.theme.gray8};
        padding-bottom: 2rem
      }
      .likes {
        padding-top: 2rem
        @media(max-width:  ${props => props.theme.breakPoint2}) {
          padding-bottom: 2rem
        }
        .heartIcon {
          width: 13px;
          fill: ${props => props.theme.gray5};
        }
        .likeNum {
          margin-left: 7px;
        }
      }
    }
    .right {
      display: flex;
      align-items: center;
      .paletteIcon {
        margin-right: 1rem;
        width: 13px;
        fill: ${props => props.theme.gray5};
      }
    }
  }
`;
