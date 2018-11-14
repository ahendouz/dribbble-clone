import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { GreenBtn } from "../../styles/Buttons";

const UserInfo = ({ session }) => {
  const { fullname, userImg } = session.getCurrentUser;
  return (
    <Info>
      <Link to="/account">Account Settings</Link>
      <div className="userImg">
        <img src={userImg} alt={fullname} />
      </div>
      <h1 className="fullname">{fullname}</h1>
      <p className="bio">Bio</p>
      <GreenBtn>Hire Me</GreenBtn>
    </Info>
  );
};

export default UserInfo;

const Info = styled.div`
  background: white;
  border-radius: 6px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07);
  padding: 2rem 0;
  text-align: center;
  text-transform: capitalize;
  font-size: 1.2rem;
  flex-basis: 30%;
  align-self: baseline;
  @media (max-width: ${props => props.theme.breakPoint6}) {
    flex-direction: column;
    width: 100%;
    margin: 0.5rem 0 1.3rem 0;
  }
  .userImg {
    height: 6rem;
    width: 6rem;
    border-radius: 50%;
    margin: 0 auto;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .fullname {
    color: ${props => props.theme.gray3};
  }
  .bio {
    margin: 0.1rem 0 0.6rem 0;
  }
`;
