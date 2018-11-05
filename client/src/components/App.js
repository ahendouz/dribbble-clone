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
    <ShotMenu />
    <Query query={GET_ALL_SHOTS}>
      {({ data, loading, error }) => {
        if (loading) return <Loader />;
        if (error) return <ErrorPage />;
        return (
          <Fragment>
            {!session ||
              (!session.getCurrentUser && <UnAuthMessage session={session} />)}
            <ShotsContainer>
              <Shots>
                {data.getAllShots.map(Shot => (
                  <ShotItem key={Shot._id} {...Shot} />
                ))}
              </Shots>
            </ShotsContainer>
          </Fragment>
        );
      }}
    </Query>
  </div>
);

export default withRouter(App);

const ShotsContainer = Styled.div`
  max-width: 100%;
  margin: 0 auto;
  width: 200rem;
  padding: 2rem 0;
  @media (max-width: ${props => props.theme.breakPointw}) {
      width: 200rem;
  };
  @media (max-width: ${props => props.theme.breakPointe}) {
      width: 175rem;
  };
  @media (max-width: ${props => props.theme.breakPointt}) {
      width: 150rem;
  };
  @media (max-width: ${props => props.theme.breakPointy}) {
      width: 125rem;
  };
  @media (max-width: ${props => props.theme.breakPointu}) {
      width: 100rem;
  };
  @media (max-width: ${props => props.theme.breakPointa}) {
      width: 75rem;
  };
  @media (max-width: ${props => props.theme.breakPointo}) {
    width: 50rem;
  };
  @media (max-width: ${props => props.theme.breakPointd}) {
    padding: 2rem;
  };
  @media (max-width: ${props => props.theme.breakPointn}) {
    padding: 1rem;
  };
`;
