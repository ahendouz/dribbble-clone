import React from "react";
import { Query } from "react-apollo";

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
        <Shots>
          {data.getUserShots.map(shot => (
            <ShotItem key={shot._id} {...shot} />
          ))}
        </Shots>
      );
    }}
  </Query>
);

export default UserShots;
