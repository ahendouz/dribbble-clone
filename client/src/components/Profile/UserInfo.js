import React from "react";
import Styled from "styled-components";

import { GreenBtn } from "../../styles/Buttons";

const UserInfo = ({ session }) => {
  const { fullname } = session.getCurrentUser;
  return (
    <Info>
      <div className="userAvatar" />
      <h1 className="fullname">{fullname}</h1>
      <p className="bio">Bio</p>
      <GreenBtn>Hire Me</GreenBtn>
    </Info>
  );
};

export default UserInfo;

const Info = Styled.div`
  background: white;
  border-radius: 6px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.07);
  padding: 2rem 0;
  text-align: center;
  text-transform: capitalize;
  font-size: 1.2rem;
  flex-basis: 30%;
  align-self: baseline;
  @media(max-width: ${props => props.theme.breakPoint6}) {
    flex-direction: column;
    width: 100%;
    margin: 0.5rem 0 1.3rem 0;
  }
  .userAvatar {
    height: 6rem;
    width: 6rem;
    background: salmon;
    border-radius: 50%;
    margin: 0 auto;
  }
  .fullname {
    color: ${props => props.theme.gray3}
  }
  .bio {
    margin: 0.1rem 0 0.6rem 0;
  }
`;
