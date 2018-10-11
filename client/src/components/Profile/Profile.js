import React from "react";
import UserInfo from "./UserInfo";
import UserShots from "./UserShots";
import withAuth from "../withAuth";

const Profile = ({ session }) => (
  <div>
    <UserInfo session={session} />
    <UserShots username={session.getCurrentUser.username} />
  </div>
);

export default withAuth(session => session && session.getCurrentUser)(Profile);
