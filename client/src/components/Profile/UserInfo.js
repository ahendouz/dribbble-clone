import React from "react";

const UserInfo = ({ session }) => (
  <div>
    <h3>user info</h3>
    <p>username: {session.getCurrentUser.username}</p>
  </div>
);
export default UserInfo;
