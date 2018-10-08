import React from "react";
import { withRouter } from "react-router-dom";

import { Query } from "react-apollo";
import { GET_SHOT } from "../../queries";

const ShotPage = ({ match }) => {
  const { _id } = match.params;
  console.log(_id);
  return (
    <Query query={GET_SHOT} variables={{ _id }}>
      {({ data, loading, error }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error</div>;
        console.log(data);
        return (
          <div className="App">
            <h2>{data.getShot.name}</h2>
            <p>description: {data.getShot.description}</p>
            <p>likes: {data.getShot.likes}</p>
            <p>username: {data.getShot.username}</p>
            <button>Like</button>
          </div>
        );
      }}
    </Query>
  );
};
export default withRouter(ShotPage);
