import React from "react";
import { GrayBtn } from "../../styles/Buttons";
import { Mutation } from "react-apollo";
import { withRouter } from "react-router-dom";

import { DELETE_USER } from "../../queries/Mutations";
import { props } from "bluebird";

const DeleteUser = ({ userId: id }) => {
  const handleDelete = deleteUser => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this account?"
    );
    if (confirmDelete) {
      deleteUser().then(({ data }) => {
        props.history.push("/signup");
      });
    }
  };
  return (
    <Mutation mutation={DELETE_USER} variables={{ id }}>
      {deleteUser => (
        <GrayBtn type="button" onClick={() => handleDelete(deleteUser)}>
          Delete Your Account
        </GrayBtn>
      )}
    </Mutation>
  );
};

export default withRouter(DeleteUser);
