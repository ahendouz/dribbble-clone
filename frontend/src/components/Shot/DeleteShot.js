import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { withRouter } from "react-router-dom";

import { DELETE_SHOT } from "../../queries/Mutations";

import SVGicon from "../../icons/SVGicon";

class DeleteShot extends Component {
  handleDelete = deleteShot => {
    const confirmDelete = window.confirm(
      "⚠️ Are you sure you want to delete this shot? ⚠️"
    );
    if (confirmDelete) {
      deleteShot().then(({ data }) => {
        this.props.history.push("/");
      });
    }
  };
  render() {
    const { id } = this.props;
    return (
      <Mutation
        mutation={DELETE_SHOT}
        variables={{ id }}
        // refetchQueries={() => [
        //   { query: GET_ALL_SHOTS },
        //   { query: GET_CURRENT_USER }
        // ]}
        // update={(cache, { data: { deleteUserShot } }) => {
        //   const { getUserShots } = cache.readQuery({
        //     query: GET_USER_SHOTS,
        //     variables: { username }
        //   });
        //   cache.writeQuery({
        //     query: GET_USER_SHOTS,
        //     variables: { username },
        //     data: {
        //       getUserShots: getUserShots.filter(
        //         shot => shot._id !== deleteUserShot._id
        //       )
        //     }
        //   });
        // }}
      >
        {(deleteShot, attrs = {}) => (
          <div className="delete" onClick={() => this.handleDelete(deleteShot)}>
            <SVGicon name="delete" className="deleteIcon" />
            &nbsp;
            <p>
              Delet
              {attrs.loading ? "ing" : "e"}
            </p>
          </div>
        )}
      </Mutation>
    );
  }
}

export default withRouter(DeleteShot);
