import React, { Fragment } from "react";
import { Query } from "react-apollo";
import { withRouter } from "react-router-dom";

import { GET_ALL_SHOTS } from "../queries";
import ShotItem from "./Shot/ShotItem";
import UnAuthMessage from "./UnAuthMessage";
import { Cards } from "../styles/Cards";
import ErrorPage from "./ErrorPage";

const App = ({ session }) => (
  <div>
    <Query query={GET_ALL_SHOTS}>
      {({ data, loading, error }) => {
        if (loading) return <div>Loading..</div>;
        if (error) return <ErrorPage />;
        // console.log(data);
        return (
          <Fragment>
            {!session ||
              (!session.getCurrentUser && <UnAuthMessage session={session} />)}
            <div
              className="wrapper medium-wrapper"
              style={{ padding: "3.7rem 0" }}
            >
              <Cards>
                {data.getAllShots.map(Shot => (
                  <ShotItem key={Shot._id} {...Shot} />
                ))}
              </Cards>
            </div>
          </Fragment>
        );
      }}
    </Query>
  </div>
);

export default withRouter(App);
