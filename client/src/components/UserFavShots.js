import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Query } from "react-apollo";

import { GET_USER_SHOTS } from "../queries";

import { HomeShots } from "./App";
import ShotItem from "./Shot/ShotItem";
import { FullnameHighlighted } from "../styles/FullnameHighlighted";

const UserFavShots = ({ session }) => {
  const { favorites, fullname, username } = session.getCurrentUser;
  return (
    <Container>
      <div className="menu">
        <ul className="links">
          <li>
            <Link to={`/${session.getCurrentUser.username}/likes`}>
              Likes <span>{favorites.length}</span>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              Shots{" "}
              <Query query={GET_USER_SHOTS} variables={{ username }}>
                {({ data, loading, error }) => {
                  if (loading) return null;
                  if (error) return null;
                  return <span>{data.getUserShots.length}</span>;
                }}
              </Query>
            </Link>
          </li>
        </ul>
      </div>
      <div className="fullnameContainer">
        <FullnameHighlighted className="fullnameHuge">
          {fullname}{" "}
          <span>
            <span>&#47;</span> Likes
          </span>
        </FullnameHighlighted>
      </div>
      <HomeShots>
        <ul>
          {favorites.map(shot => (
            <ShotItem key={shot._id} {...shot} />
          ))}
        </ul>
      </HomeShots>
    </Container>
  );
};

export default UserFavShots;

const Container = styled.div`
  text-align: center;
  .menu {
    .links {
      display: flex;
      justify-content: center;
      border-bottom: 1px solid ${props => props.theme.gray8};
      padding: 1.5rem 0;
      font-size: 1.4rem;
      li {
        color: ${props => props.theme.gray3};
        font-weight: 500;
        transition: all .2s;
        &:not(:last-of-type) {
          margin-right: 2rem;
        }
        &:hover {
          color: ${props => props.theme.gray4};
          & span {
            color: ${props => props.theme.gray7};
          }
        }
        span {
          color: ${props => props.theme.gray6};
          font-weight: 400;
          transition: all .2s
        }
      }
    }
  }
  .fullnameContainer {
    border-bottom: 1px solid ${props => props.theme.gray8};
    padding: 1.7rem 0;
    .fullnameHuge {
      font-size: 2rem;
      font-weight: 500;
      > span {
        color: ${props => props.theme.gray3}
        span {
          color: ${props => props.theme.gray6}
        }
      }
    }
  }
`;
