import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { ThemeProvider } from "styled-components";

import { Root } from "./routes";
import withSession from "./lib/withSession";
import { theme } from "./theme/theme";

import "./index.css";

export const client = new ApolloClient({
  // uri: "http://localhost:4444/",
  uri: "https://dribbble-clone-yoga-prod.herokuapp.com/",
  // fetchOptions: {
  //   credentials: "include"
  // },
  request: operation => {
    const token = localStorage.getItem("token");
    operation.setContext({
      headers: {
        authorization: token
      }
    });
  },
  onError: ({ networkError }) => {
    if (networkError) {
      console.log("network  Error", networkError);
    }
  }
});

const RootWithSession = withSession(Root);

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <RootWithSession />
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
