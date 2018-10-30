import React from "react";

import UserInfo from "./UserInfo";
import UserShots from "./UserShots";
import withAuth from "../withAuth";

const style = {
  width: "70rem",
  margin: "0 auto",
  maxWidth: "100%",
  padding: "3rem 0"
};

const Profile = ({ session }) => {
  console.log(session);
  return (
    <div style={style}>
      <UserInfo session={session} />
      <UserShots username={session.getCurrentUser.username} />
    </div>
  );
};

export default withAuth(session => session && session.getCurrentUser)(Profile);
