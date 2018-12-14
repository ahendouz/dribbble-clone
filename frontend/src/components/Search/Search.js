import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ApolloConsumer } from "react-apollo";
import { gql } from "apollo-boost";
import debounce from "lodash.debounce";
import styled from "styled-components";

import SVGicon from "../../icons/SVGicon";
import SearchItem from "./SearchItem";

const SEARCH_ITEMS_QUERY = gql`
  query($searchTerm: String!) {
    shots(where: { title_contains: $searchTerm }, first: 4) {
      id
      title
      image
      postedBy {
        id
        username
      }
    }
  }
`;
class Search extends Component {
  state = {
    searchResults: [],
    loading: false,
    inputVal: ""
  };

  handleChange = debounce(async (e, client) => {
    const value = e.target.value.replace(/^\s+|\s+$/g, "");
    this.setState({ loading: false, inputVal: value });
    if (value.length > 0) {
      const res = await client.query({
        query: SEARCH_ITEMS_QUERY,
        variables: { searchTerm: value.replace(/^\s+|\s+$/g, "") }
      });
      this.setState({
        searchResults: res,
        loading: true
      });
    } else {
      this.setState({
        searchResults: []
      });
    }
  }, 350);

  render() {
    window.addEventListener("mouseup", event => {
      const search = document.getElementsByClassName("searchResults");
      const searchElement = search[Object.keys(search)[0]];
      if (
        searchElement &&
        event.target !== searchElement &&
        event.target.parentNode.parentNode !== searchElement
      ) {
        searchElement.style.display = "none";
      }
    });
    const { data } = this.state.searchResults;
    return (
      <ApolloConsumer>
        {client => {
          return (
            <SearchContainer>
              <div className="search" style={{ marginTop: "2px" }}>
                <input
                  type="text"
                  placeholder="Search"
                  onChange={e => {
                    e.persist();
                    this.handleChange(e, client);
                  }}
                />
                <SVGicon name="search" />
              </div>
              {data && data.shots.length > 0 && (
                <div className="searchResults">
                  <ul>
                    <p>SHOTS</p>
                    {this.state.searchResults.data.shots.map(shot => (
                      <Link to={`/shot/${shot.id}`} key={shot.id}>
                        <SearchItem {...shot} />
                      </Link>
                    ))}
                  </ul>
                </div>
              )}
            </SearchContainer>
          );
        }}
      </ApolloConsumer>
    );
  }
}
export default Search;

const SearchContainer = styled.div`
  position: relative;
  .search {
    input {
      width: 100%;
    }
  }
  .searchResults {
    position: absolute;
    z-index: 2;
    padding: 1.3rem;
    background: ${props => props.theme.gray2};
    width: 100%;
    max-width: 100%;
    border-radius: 0px 0px 7px 7px;
    box-shadow: ${props => props.theme.shadow1};
    ul {
      text-align: left;
      > p {
        font-size: 1.2rem;
        font-weight: 700;
      }
    }
  }
`;
