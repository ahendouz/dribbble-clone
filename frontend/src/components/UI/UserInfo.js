import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { GreenBtn } from "../../styles/Buttons";
import SVGicon from "../../icons/SVGicon";

const UserInfo = ({
  session,
  data: {
    user: { id, profileImage, fullname, bio, location }
  },
  userId,
  width
}) => {
  return (
    <Info width={width}>
      {session && session.getCurrentUser && session.getCurrentUser.id === id && (
        <div className="edit">
          <SVGicon name="settings" fill="#bbbbbb" />

          <div className="drop">
            <Link to={`/${userId}/edit`}>edit your account Settings</Link>
          </div>
        </div>
      )}

      <div className="userImg">
        <img src={profileImage} alt={fullname} />
      </div>
      <h1 className="fullname">{fullname}</h1>

      <p className="bio">{location}</p>
      <p className="bio">{bio}</p>
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
  flex-basis: ${props => (props.width > 0 ? "30%" : "100%")};
  align-self: baseline;
  position: relative;
  .edit {
    svg {
      width: 16px;
      padding: 8px 11px;
      box-sizing: content-box;
      border-radius: 3px 3px 0px 0px;
    }
    position: absolute;
    top: 20px;
    right: 20px;
    text-align: right;

    .drop {
      display: none;
      padding: 9px;
      margin-top: -7px;
      border-radius: 3px 0 3px 3px;
    }
    &:hover {
      svg {
        background: ${props => props.theme.gray2};
      }
      .drop {
        background: ${props => props.theme.gray2};
        display: block;
      }
    }
  }
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
