import React from "react";
import Styled from "styled-components";

import { GreenBtn } from "../../styles/Buttons";


const UserInfo = ({ session }) => {
  const { username } = session.getCurrentUser;
  return (
    <Info>
      <div className="userAvatar" />
      <h1 className="username">{username}</h1>
      <p className="bio">Bio</p>
      <GreenBtn>Hire Me</GreenBtn>
    </Info>
  );
};

export default UserInfo;

const Info = Styled.div`
  background-color: salmon;
  margin-bottom: 3rem;
  background: white;
  border-radius: 6px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.07);
  padding: 2rem 0;
  text-align: center;
  text-transform: capitalize;
  font-size: 1.2rem;
  .userAvatar {
    height: 6rem;
    width: 6rem;
    background: salmon;
    border-radius: 50%;
    margin: 0 auto;
  }
  .username {
    color: ${props => props.theme.gray3}
  }
  .bio {
    margin: 0.1rem 0 0.6rem 0;
  }
`;
