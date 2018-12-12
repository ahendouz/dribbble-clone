import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Query } from "react-apollo";

import { USER } from "../../queries/Queries";

import { HomeShots } from "../Home";
import ShotItem from "../Shot/ShotItem";
import { FullnameHighlighted } from "../../styles/FullnameHighlighted";

const UserFavShots = ({
  session: {
    getCurrentUser: { id }
  }
}) => {
  return (
    <Query query={USER} variables={{ id }}>
      {({ data, loading, error }) => {
        if (loading) return null;
        if (error) return null;
        const { favorites, profileImage, fullname } = data.user;
        return (
          <Container>
            <div className="menu">
              <ul className="links">
                <li>
                  Likes <span>{favorites.length}</span>
                </li>
                <li>
                  <Link to="/profile">
                    Shots <span>{favorites.length}</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="fullnameContainer">
              <div className="userImage">
                <img src={profileImage} alt={fullname} />
              </div>
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
                  <ShotItem
                    key={shot.shot.id}
                    {...shot.shot}
                    currentUserId={id && id}
                  />
                ))}
              </ul>
            </HomeShots>
          </Container>
        );
      }}
    </Query>
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
        transition: all 0.2s;
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
          transition: all 0.2s;
        }
      }
    }
  }
  .fullnameContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    .userImage {
      border-radius: 50%;
      overflow: hidden;
      width: 4.5rem;
      height: 4.5rem;
      margin-right: 1rem;
      img {
        width: 100%;
      }
    }
    border-bottom: 1px solid ${props => props.theme.gray8};
    padding: 1.7rem 0;
    .fullnameHuge {
      font-size: 2rem;
      font-weight: 500;
      > span {
        color: ${props => props.theme.gray3};
        span {
          color: ${props => props.theme.gray6};
        }
      }
    }
  }
`;
