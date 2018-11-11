import React from "react";
import ReactDOM from "react-dom";
import { theme } from "./theme/theme";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { ThemeProvider } from "styled-components";

import "./index.css";
import App from "./components/App";
import Signin from "./components/Auth/Signin";
import Signup from "./components/Auth/Signup";
import withSession from "./components/withSession";
import Navbar from "./components/Navbar/Navbar";
import AddShot from "./components/Shot/AddShot";
import Profile from "./components/Profile/Profile";
import ShotPage from "./components/Shot/ShotPage";
import EditShot from "./components/Shot/EditShot";
import ComingSoon from "./components/ComingSoon";
import Footer from "./components/Footer/Footer";
import UserFavShots from "./components/UserFavShots";

// connecting the frontend with the backend
export const client = new ApolloClient({
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
    <ThemeProvider theme={theme}>
      <div>
        <Navbar session={session} />
        <Switch>
          <Route path="/" exact render={() => <App session={session} />} />
          <Route
            path="/signin"
            render={() => <Signin refetch={refetch} session={session} />}
          />
          <Route
            path="/signup"
            render={() => <Signup refetch={refetch} session={session} />}
          />
          <Route
            path="/shot/add"
            render={() => <AddShot session={session} />}
          />
          <Route
            path="/shot/:_id/edit"
            render={() => <EditShot session={session} />}
          />
          <Route
            path="/shot/:_id"
            render={() => <ShotPage session={session} />}
          />
          <Route path="/profile" render={() => <Profile session={session} />} />
          <Route path="/coming-soon" component={ComingSoon} />
          {/* <Route
            path={`/${session.getCurrentUser.username}/likes`}
            render={() => <UserFavShots session={session} />}
          /> */}
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    </ThemeProvider>
  </Router>
);

const RootWithSession = withSession(Root);

ReactDOM.render(
  <ApolloProvider client={client}>
    <RootWithSession />
  </ApolloProvider>,
  document.getElementById("root")
);
