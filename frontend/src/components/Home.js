import React, { Fragment } from "react";
import { Query } from "react-apollo";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import { SHOTS } from "../queries/Queries";
import ShotItem from "./Shot/ShotItem";
import UnAuthMessage from "./UI/UnAuthMessage";
import { Shots } from "../styles/Shots";
import ErrorPage from "./Errors/ErrorPage";
import Loader from "./UI/Loader";
import ShotMenu from "./UI/ShotMenu";

const Home = ({ session }) => (
  <div>
    {session && (session.getCurrentUser && <ShotMenu session={session} />)}
    <Query query={SHOTS}>
      {({ data, loading, error }) => {
        if (loading) return <Loader />;
        if (error) return <ErrorPage />;
        return (
          <Fragment>
            {!session ||
              (!session.getCurrentUser && <UnAuthMessage session={session} />)}
            <HomeShots>
              <ul>
                {data.shots.map(shot => (
                  <ShotItem
                    key={shot.id}
                    {...shot}
                    currentUserId={
                      session &&
                      session.getCurrentUser &&
                      session.getCurrentUser.id
                    }
                  />
                ))}
              </ul>
            </HomeShots>
          </Fragment>
        );
      }}
    </Query>
  </div>
);

export default withRouter(Home);

export const HomeShots = styled(Shots)`
  margin: 0 auto;
  padding: 2rem 0;
`;
