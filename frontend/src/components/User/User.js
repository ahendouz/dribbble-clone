import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Query } from "react-apollo";
import styled from "styled-components";

import { USER } from "../../queries/Queries";

import Loader from "../UI/Loader";
import ErrorPage from "../Errors/ErrorPage";
import UserInfo from "../UI/UserInfo";
import UserShots from "../UI/UserShots";

class User extends Component {
  render() {
    const { userId: id } = this.props.match.params;
    const { session } = this.props;
    return (
      <Query query={USER} variables={{ id }}>
        {({ data, loading, error }) => {
          if (loading) return <Loader />;
          if (error) return <ErrorPage />;
          const { shots } = data.user;
          return (
            <Container width={shots.length}>
              <UserInfo
                width={shots.length}
                data={data}
                session={session}
                userId={id}
                UserShots={shots.length}
              />
              {shots.length > 0 && (
                <UserShots UserShots={shots} data={data.user} />
              )}
            </Container>
          );
        }}
      </Query>
    );
  }
}

export default withRouter(User);

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${props => (props.width > 0 ? "107rem" : "97rem")};
  margin: 0 auto;
  max-width: 100%;
  padding: 3rem 0px;
  @media (max-width: ${props => props.theme.breakPoint6}) {
    flex-direction: column;
    width: 97rem;
  }
  @media (max-width: ${props => props.theme.breakPoint6}) {
    width: 72rem;
  }
  @media (max-width: ${props => props.theme.breakPoint11}) {
    width: 47rem;
  }
  @media (max-width: ${props => props.theme.breakPoint14}) {
    width: auto;
    padding: 2rem;
  }
`;
