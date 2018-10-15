import React from "react";
import { Query } from "react-apollo";
import Styled from "styled-components";

import { GET_ALL_SHOTS } from "../queries";
import ShotItem from "./Shot/ShotItem";

const App = () => (
  <div className="App">
    <h1>Home</h1>
    <Query query={GET_ALL_SHOTS}>
      {({ data, loading, error }) => {
        if (loading) return <div>Loading..</div>;
        if (error) return <div>Error</div>;
        console.log(data);
        return (
          <Cards className="cards">
            {data.getAllShots.map(Shot => (
              <ShotItem key={Shot._id} {...Shot} />
            ))}
          </Cards>
        );
      }}
    </Query>
  </div>
);

export default App;

const Cards = Styled.ul`
  display: grid;
  margin: 1.5em 3em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-flow: row dense;
  grid-gap: 2em;
  grid-auto-rows: auto;
`;
