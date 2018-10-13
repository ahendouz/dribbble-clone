import React from "react";
import { Query, Mutation } from "react-apollo";
import {
  GET_USER_SHOTS,
  DELETE_USER_SHOT,
  GET_CURRENT_USER,
  GET_ALL_SHOTS
} from "../../queries";
import { Link } from "react-router-dom";

const handleDelete = deleteUserShot => {
  const confirmDelete = window.confirm(
    "Are you sure you want t delete this shot?"
  );
  if (confirmDelete) {
    deleteUserShot().then(({ data }) => {
      // console.log(data);
    });
  }
};
const UserShots = ({ username }) => (
  <Query query={GET_USER_SHOTS} variables={{ username }}>
    {({ data, loading, error }) => {
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error</div>;
      // console.log(data);
      return (
        <ul>
          <h3>your shots</h3>
          {!data.getUserShots.length && (
            <p>
              <strong>You have not added any shot yet</strong>
            </p>
          )}
          {data.getUserShots.map(shot => (
            <li key={shot._id}>
              <Link to={`shot/${shot._id}`}>
                <p>{shot.name}</p>
              </Link>

              <Mutation
                mutation={DELETE_USER_SHOT}
                variables={{ _id: shot._id }}
                refetchQueries={() => [
                  { query: GET_ALL_SHOTS },
                  { query: GET_CURRENT_USER }
                ]}
                update={(cache, { data: { deleteUserShot } }) => {
                  //   console.log(cache, data);
                  const { getUserShots } = cache.readQuery({
                    query: GET_USER_SHOTS,
                    variables: { username }
                  });
                  cache.writeQuery({
                    query: GET_USER_SHOTS,
                    variables: { username },
                    data: {
                      getUserShots: getUserShots.filter(
                        shot => shot._id !== deleteUserShot._id
                      )
                    }
                  });
                }}
              >
                {deleteUserShot => (
                  <button onClick={() => handleDelete(deleteUserShot)}>
                    delete
                  </button>
                )}
              </Mutation>
            </li>
          ))}
        </ul>
      );
    }}
  </Query>
);

export default UserShots;
