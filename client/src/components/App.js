import React from "react";
import "./App.css";

import { Query } from "react-apollo";
import { GET_ALL_SHOTS } from "../queries";
import ShotItem from "./Shot/ShotItem";

const App = () => (
  <div className="App">
    <h1>Home</h1>
    <Query query={GET_ALL_SHOTS}>
      {({ data, loading, error }) => {
        if (loading) return <div>Loading..</div>;
        if (error) return <div>Error</div>;
        // console.log(data);
        return (
          <ul>
            {data.getAllShots.map(Shot => (
              <ShotItem  key={Shot._id} {...Shot} />
            ))}
          </ul>
        );
      }}
    </Query>
  </div>
);

export default App;
