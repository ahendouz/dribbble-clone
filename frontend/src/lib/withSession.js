import React from "react";
import { Query } from "react-apollo";
import { GET_CURRENT_USER } from "../queries/Queries";

const withSesstion = Component => props => (
  <Query query={GET_CURRENT_USER}>
    {({ data, loading, refetch }) => {
      if (loading) return null;
      console.log("👤👤", data);
      return <Component {...props} refetch={refetch} session={data} />;
    }}
  </Query>
);

export default withSesstion;
