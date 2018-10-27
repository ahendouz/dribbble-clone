import React, { Component } from "react";
import { ApolloConsumer } from "react-apollo";
// import { SEARCH_SHOTS } from "../../queries";
// import SearchItem from "./SearchItem";

class Search extends Component {
  state = {
    searchResults: []
  };

  handleChange = event => {
    const { name, value } = event.target;
    // console.log(`${name}: ${value}`);
    this.setState({ [name]: value });
  };
  render() {
    // const { searchResults } = this.state;
    return (
      <ApolloConsumer>
        {client => {
          return (
            <div>
              <input
                type="search"
                placeholder="Search"
                onChange={event => this.handleChange}
              />
              {/* <ul>
                {searchResults.map(shot => (
                  <SearchItem key={shot._id} {...shot} />
                ))}
              </ul> */}
            </div>
          );
        }}
      </ApolloConsumer>
    );
  }
}
export default Search;
