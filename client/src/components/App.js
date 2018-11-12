import React, { Fragment } from "react";
import { Query } from "react-apollo";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import { GET_ALL_SHOTS } from "../queries";
import ShotItem from "./Shot/ShotItem";
import UnAuthMessage from "./UnAuthMessage";
import { Shots } from "../styles/Shots";
import ErrorPage from "./ErrorPage";
import Loader from "./UI/Loader";
import ShotMenu from "./UI/ShotMenu";

const App = ({ session }) => (
  <div>
    {session && (session.getCurrentUser && <ShotMenu session={session} />)}
    <Query query={GET_ALL_SHOTS}>
      {({ data, loading, error }) => {
        if (loading) return <Loader />;
        if (error) return <ErrorPage />;
        console.log(data);
        return (
          <Fragment>
            {!session ||
              (!session.getCurrentUser && <UnAuthMessage session={session} />)}
            <HomeShots>
              <ul>
                {data.getAllShots.map(shot => (
                  <ShotItem key={shot._id} {...shot} />
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

export const HomeShots = styled(Shots)`
  margin: 0 auto;
  padding: 2rem 0;
`;
