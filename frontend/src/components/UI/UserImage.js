import React from "react";
import styled from "styled-components";

const UserImage = ({ profileImage, size }) => (
  <ProfileImg size={size}>
    <img src={profileImage} alt="user" />
  </ProfileImg>
);
export default UserImage;

const ProfileImg = styled.div`
  border-radius: 50%;
  overflow: hidden;
  width: ${props => props.size};
  height: ${props => props.size};
  img {
    width: 100%;
  }
`;
