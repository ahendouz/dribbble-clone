import React from "react";
import { Query } from "react-apollo";
import { GET_USER_SHOTS } from "../../queries";
import { Link } from "react-router-dom";

const UserShots = ({ username }) => (
  <Query query={GET_USER_SHOTS} variables={{ username }}>
    {({ data, loading, error }) => {
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error</div>;
      console.log(data);
      return (
        <ul>
          <h3>your shots</h3>
          {data.getUserShots.map(shot => (
            <li key={shot._id}>
              <Link to={`shot/${shot._id}`}>
                <p>{shot.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      );
    }}
  </Query>
);

export default UserShots;
