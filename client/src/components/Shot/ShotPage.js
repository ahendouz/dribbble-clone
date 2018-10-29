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

const ShotPage = ({ match }) => {
  const { _id } = match.params;
  return (
    <Query query={GET_SHOT} variables={{ _id }}>
      {({ data, loading, error }) => {
        if (loading) return <div>Loading...</div>;
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
          <Container style={{ fontSize: "1.3rem" }}>
            <div className="header">
              <div className="header-wrapper wrapper medium-wrapper">
                <div className="headerContent">
                  <h2 className="shotName">{name}</h2>
                  <div className="shotInfo">
                    by{" "}
                    <UsernameHighlighted className="username">
                      {username}{" "}
                    </UsernameHighlighted>
                    on {formatDate(createDate)}
                  </div>
                </div>
                <LikeShot _id={_id} btnType="button" />
              </div>
            </div>
            <div className="shot">
              <div>
                <img src={largeImage} alt="shot" />
              </div>
            </div>
            <div className="description">
              <div className="wrapper medium-wrapper">
                <p>{description}</p>
                <p>
                  <SVGicon name="heart" width={13} height={13} fill="#777777" />
                  <span>{likes} likes</span>
                </p>
              </div>
            </div>
          </Container>
        );
      }}
    </Query>
  );
};
export default withRouter(ShotPage);

const Container = Styled.div`
  font-size: 1.4rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  .header {
    background: ${props => props.theme.grey7};
    height: 10rem;
    display: flex;
    align-items: center;
    .header-wrapper {
      display: flex;
      justify-content: space-between
      .headerContent {
        .shotName {
          color: ${props => props.theme.gray3};
        }
        .shotInfo {
          display: flex;
          .username {
            padding: 0px 5px 2px 5px;
            margin-top: -0.1px;
          }
        }
      }
      > button {
        align-self: center
      }
    }
  }
  .shot {
    background: white;
    > div {
      padding: 2rem 0;
      width: 45rem;
      margin: 0 auto;
      > img {
        width: 100%
        box-shadow: 0 0 1px rgba(0,0,0,0.2);
      }
    }
  }
  .description {
    background: ${props => props.theme.grey7};
    padding: 3rem 0;
    flex: 1
    p {
      width: 46rem;
      font-size: 1.5rem;
      color: ${props => props.theme.gray4};
    }
    p:last-of-type {
      padding: 2rem 0;
      span {
        margin-left: 7px;
      }
    }
  }
`;
