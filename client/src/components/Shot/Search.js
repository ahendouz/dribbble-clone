import React, { Component } from "react";
import { ApolloConsumer } from "react-apollo";

import SVGicon from "../SVGicon";
class Search extends Component {
  state = {
    searchResults: []
  };

  render() {
    return (
      <ApolloConsumer>
        {client => {
          return (
            <div className="search">
              <input type="text" placeholder="Search" />
              <SVGicon name="search" />
            </div>
          );
        }}
      </ApolloConsumer>
    );
  }
}
export default Search;
