import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import "./index.css";
import App from "./components/App";
import Signin from "./components/Auth/Signin";
import Signup from "./components/Auth/Signup";
import withSession from "./components/withSession";
import Navbar from "./components/Navbar";
import AddShot from "./components/Shot/AddShot";
import Profile from "./components/Profile/Profile";
import ShotPage from "./components/Shot/ShotPage";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

// connecting the frontend with the backend
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  // https://m-dribbble-clone.herokuapp.com/graphql
  fetchOptions: {
    credentials: "include"
  },
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

const Root = ({ refetch, session }) => (
  <Router>
    <div>
      <Navbar session={session} />
      <Switch>
        <Route path="/" exact render={() => <App session={session}/>} />
        <Route path="/signin" render={() => <Signin refetch={refetch} />} />
        <Route path="/signup" render={() => <Signup refetch={refetch} />} />
        <Route path="/shot/add" render={() => <AddShot session={session} />} />
        <Route path="/shot/:_id" component={ShotPage} />} />
        <Route path="/profile" render={() => <Profile session={session} />} />
        <Redirect to="/" />
      </Switch>
    </div>
  </Router>
);

const RootWithSession = withSession(Root);

ReactDOM.render(
  <ApolloProvider client={client}>
    <RootWithSession />
  </ApolloProvider>,
  document.getElementById("root")
);
