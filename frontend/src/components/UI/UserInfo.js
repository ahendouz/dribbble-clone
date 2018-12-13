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
          <div className="icon">
            <SVGicon name="settings" className="settings" fill="#bbbbbb" />
            <SVGicon name="downArrow" className="downArrow" fill="#bbbbbb" />
          </div>

          <div className="drop">
            <Link to={`/${userId}/edit`}>edit your account Settings</Link>
          </div>
        </div>
      )}

      <div className="userImg">
        <img src={profileImage} alt={fullname} />
      </div>
      <h1 className="fullname">{fullname}</h1>

      <p className="loacation">{location}</p>
      <p className="bio">{bio}</p>
      <Link to="/coming-soon">
        <GreenBtn>Hire Me</GreenBtn>
      </Link>
    </Info>
  );
};

export default UserInfo;

const Info = styled.div`
  background: white;
  border-radius: 6px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07);
  padding: 2rem 1rem;
  text-align: center;
  text-transform: capitalize;
  font-size: 1.2rem;
  flex-basis: ${props => (props.width > 0 ? "30%" : "100%")};
  align-self: baseline;
  position: relative;
  .edit {
    .icon {
      padding: 8px 11px;
      border-radius: 3px 3px 0px 0px;
      display: inline-block;
      .settings {
        width: 16px;
      }
      .downArrow {
        width: 11px;
        margin: 0px 0px 3px 4px;
      }
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
      font-size: 1.25rem;
    }
    &:hover {
      .icon {
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
  .bio,
  .location {
    font-size: 1.4rem;
  }
  .bio {
    color: ${props => props.theme.gray11};
    margin: 1.5rem 0 1.2rem 0;
  }
  .location {
    margin: 0.1rem 0 0.6rem 0;
    color: ${props => props.theme.gray12};
    margin-bottom: 1rem;
  }
`;
