import React from "react";
import { withRouter } from "react-router-dom";
import Styled from "styled-components";
import { Query } from "react-apollo";

import { GET_SHOT } from "../../queries";

import Error from "../Error";
import { date } from "../Date";
import LikeShot from "./LikeShot";
import { UsernameHighlighted } from "../../styles/UsernameHighlighted";

const ShotPage = ({ match }) => {
  const { _id } = match.params;
  return (
    <Query query={GET_SHOT} variables={{ _id }}>
      {({ data, loading, error }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <Error />;
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
                    on {date(createDate)}
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
            <div className="Description">
              <div className="wrapper medium-wrapper">
                <p>{description}</p>
                <p>
                  <span role="img" aria-label="heart">
                    ❤️
                  </span>
                  {likes} likes
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
    flex: 1
    p {
      width: 46rem;
      padding: 1rem 0
    }
  }
`;
