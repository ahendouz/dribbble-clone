import React, { Fragment } from "react";
import { Query } from "react-apollo";
import { withRouter } from "react-router-dom";
import Styled from "styled-components";

import { GET_ALL_SHOTS } from "../queries";
import ShotItem from "./Shot/ShotItem";
import UnAuthMessage from "./UnAuthMessage";
import { Shots } from "../styles/Shots";
import ErrorPage from "./ErrorPage";
import Loader from "./UI/Loader";
import ShotMenu from "./UI/ShotMenu";

const App = ({ session }) => (
  <div>
    {session.getCurrentUser && <ShotMenu />}
    <Query query={GET_ALL_SHOTS}>
      {({ data, loading, error }) => {
        if (loading) return <Loader />;
        if (error) return <ErrorPage />;
        return (
          <Fragment>
            {!session ||
              (!session.getCurrentUser && <UnAuthMessage session={session} />)}
            <HomeShots>
              <ul>
                {data.getAllShots.map(Shot => (
                  <ShotItem key={Shot._id} {...Shot} />
                ))}
              </ul>
            </HomeShots>
          </Fragment>
        );
      }}
    </Query>
  </div>
);

export default withRouter(App);

const HomeShots = Styled(Shots)`
  margin: 0 auto;
  padding: 2rem 0;
`;
