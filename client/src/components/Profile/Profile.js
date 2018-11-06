import React from "react";
import Styled from "styled-components";

import UserInfo from "./UserInfo";
import UserShots from "./UserShots";
import withAuth from "../withAuth";

const Profile = ({ session }) => {
  console.log(session);
  return (
    <Container>
      <UserInfo session={session} />
      <UserShots username={session.getCurrentUser.username} />
    </Container>
  );
};

export default withAuth(session => session && session.getCurrentUser)(Profile);

const Container = Styled.div`
  display: flex;
  justify-content: space-between;
  width: 107rem;
  margin: 0 auto;
  max-width: 100%;
  padding: 3rem 0px;
  @media(max-width: ${props => props.theme.breakPoint6}) {
    flex-direction: column;
    width: 97rem;
  }
  @media(max-width: ${props => props.theme.breakPoint6}) {
    width: 72rem;
  }
  @media(max-width: ${props => props.theme.breakPoint11}) {
    width: 47rem;
  }
  @media(max-width: ${props => props.theme.breakPoint14}) {
    width: auto;
    padding: 2rem
  }
`;
