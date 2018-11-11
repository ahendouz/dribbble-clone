import React from "react";
import { Query } from "react-apollo";
import styled from "styled-components";

import { GET_USER_SHOTS } from "../../queries";

import { Shots } from "../../styles/Shots";
import ShotItem from "../Shot/ShotItem";
import ErrorPage from "../ErrorPage";
import Loader from "../UI/Loader";

const UserShots = ({ username }) => (
  <Query query={GET_USER_SHOTS} variables={{ username }}>
    {({ data, loading, error }) => {
      if (loading) return <Loader />;
      if (error) return <ErrorPage />;
      return (
        <UserShoots>
          <ul>
            {data.getUserShots.map(shot => (
              <ShotItem key={shot._id} {...shot} />
            ))}
          </ul>
        </UserShoots>
      );
    }}
  </Query>
);

export default UserShots;

const UserShoots = styled(Shots)`
  flex-basis: 67%;
  .username {
    display: none
  }
  @media(max-width: ${props => props.theme.breakPoint6}) {
    width: 100%;
    padding: 2rem 0;
  }
`;
