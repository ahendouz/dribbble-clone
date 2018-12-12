import React from "react";
import styled from "styled-components";

import { Shots } from "../../styles/Shots";
import ShotItem from "../Shot/ShotItem";

const UserShots = ({ UserShots, data }) => (
  <UserShoots>
    <ul>
      {UserShots.map(shot => (
        <ShotItem key={shot.id} {...shot} postedBy={data} />
      ))}
    </ul>
  </UserShoots>
);

export default UserShots;

const UserShoots = styled(Shots)`
  flex-basis: 67%;
  .username {
    display: none;
  }
  @media (max-width: ${props => props.theme.breakPoint6}) {
    width: 100%;
    padding: 2rem 0;
  }
`;
