import React, { Component } from "react";
import { ApolloConsumer } from "react-apollo";
import { SEARCH_SHOTS } from "../../queries";
import SearchItem from "./SearchItem";

class Search extends Component {
  state = {
    searchResults: []
  };
  handleChange = ({ searchShots }) => {
    this.setState({
      searchResults: searchShots
    });
  };
  render() {
    const { searchResults } = this.state;
    return (
      <ApolloConsumer>
        {client => {
          return (
            <div className="App">
              <input
                type="search"
                className="search"
                placeholder="Search"
                onChange={async event => {
                  event.persist();
                  const { data } = await client.query({
                    query: SEARCH_SHOTS,
                    variables: { searchTerm: event.target.value }
                  });
                  this.handleChange(data);
                }}
              />
              <ul>
                {searchResults.map(shot => (
                  <SearchItem key={shot._id} {...shot} />
                ))}
              </ul>
            </div>
          );
        }}
      </ApolloConsumer>
    );
  }
}
export default Search;
