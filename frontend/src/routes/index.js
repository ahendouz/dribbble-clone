import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home";
import Signin from "../components/Auth/Signin";
import Signup from "../components/Auth/Signup";
import AddShot from "../components/Shot/AddShot";
import ShotPage from "../components/Shot/ShotPage";
import EditShot from "../components/Shot/EditShot";
import User from "../components/User/User";
import EditUser from "../components/User/EditUser";
import UserFavoriteShots from "../components/User/UserFavoriteShots";
import ComingSoon from "../components/UI/ComingSoon";
import Footer from "../components/Footer/Footer";

export const Root = ({ refetch, session }) => (
  <Router>
    <Fragment>
      <Navbar session={session} />
      <Switch>
        <Route path="/" exact render={() => <Home session={session} />} />
        <Route
          path="/signin"
          render={() => <Signin refetch={refetch} session={session} />}
        />
        <Route
          path="/signup"
          render={() => <Signup refetch={refetch} session={session} />}
        />
        <Route path="/shot/add" render={() => <AddShot session={session} />} />
        <Route path="/coming-soon" component={ComingSoon} />
        {session && session.getCurrentUser && (
          <Route
            path={`/${session.getCurrentUser.username}/likes`}
            render={() => <UserFavoriteShots session={session} />}
          />
        )}
        <Route
          path="/shot/:id/edit"
          render={() => <EditShot session={session} />}
        />
        <Route path="/shot/:id" render={() => <ShotPage session={session} />} />
        <Route
          path="/:userId/edit"
          render={() => <EditUser session={session} />}
        />
        <Route path="/:userId" render={() => <User session={session} />} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </Fragment>
  </Router>
);
