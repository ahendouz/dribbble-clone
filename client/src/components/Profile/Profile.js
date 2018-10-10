import React from "react";
import UserInfo from "./UserInfo";

const Profile = ({ session }) => (
  <div>
    <UserInfo session={session} />
  </div>
);

export default Profile;
