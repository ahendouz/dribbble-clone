import React from "react";
import { Query } from "react-apollo";

import { GET_USER_SHOTS } from "../../queries";

import { Cards } from "../../styles/Cards";
import ShotItem from "../Shot/ShotItem";
import ErrorPage from "../ErrorPage";

const UserShots = ({ username }) => (
  <Query query={GET_USER_SHOTS} variables={{ username }}>
    {({ data, loading, error }) => {
      if (loading) return <div>Loading...</div>;
      if (error) return <ErrorPage />;
      return (
        <Cards>
          {data.getUserShots.map(shot => (
            <ShotItem key={shot._id} {...shot} />
          ))}
        </Cards>
      );
    }}
  </Query>
);

export default UserShots;
