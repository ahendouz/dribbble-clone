import React from "react";
import { ApolloConsumer } from "react-apollo";
import { withRouter } from "react-router-dom";

const handleSignout = (client, history) => {
  localStorage.setItem("token", "");
  client.resetStore();
  history.push("/");
};
const Signout = ({ history }) => (
  <ApolloConsumer>
    {client => {
      // console.log(client);
      return (
        <p
          style={{ cursor: "pointer" }}
          onClick={() => handleSignout(client, history)}
        >
          Signout
        </p>
      );
    }}
  </ApolloConsumer>
);

export default withRouter(Signout);
