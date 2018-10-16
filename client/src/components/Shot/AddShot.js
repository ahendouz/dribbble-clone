import React from "react";
import { Mutation } from "react-apollo";
import { withRouter } from "react-router-dom";
import { ADD_SHOT, GET_ALL_SHOTS, GET_USER_SHOTS } from "../../queries";
import Error from "../Error";
import withAuth from "../withAuth";

const initialState = {
  name: "",
  imageUrl: "",
  description: "",
  username: ""
};
class AddShot extends React.Component {
  state = { ...initialState };

  clearState = () => {
    this.setState({ ...initialState });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event, addShot) => {
    event.preventDefault();
    addShot().then(({ data }) => {
      // console.log(data);
      this.clearState();
      this.props.history.push("/");
    });
  };

  validateForm = () => {
    const { name, imageUrl, description } = this.state;
    const isInvalid = !name || !imageUrl || !description;
    return isInvalid;
  };

  updateCache = (cache, { data: { addShot } }) => {
    const { getAllShots } = cache.readQuery({ query: GET_ALL_SHOTS });
    // console.log("from cache", getAllShots);
    // console.log("from data", addShot);
    cache.writeQuery({
      query: GET_ALL_SHOTS,
      data: {
        getAllShots: [addShot, ...getAllShots]
      }
    });
  };

  componentDidMount() {
    // console.log(this.props.session.getCurrentUser.username);
    this.setState({
      username: this.props.session.getCurrentUser.username
    });
  }

  render() {
    const { name, imageUrl, description, username } = this.state;

    return (
      <Mutation
        mutation={ADD_SHOT}
        variables={{ name, imageUrl, description, username }}
        refetchQueries={() => [
          { query: GET_USER_SHOTS, variables: { username } }
        ]}
        update={this.updateCache}
      >
        {(addShot, { data, loading, error }) => {
          return (
            <div>
              <div>
                <h2>Add Shot</h2>
                <form
                  onSubmit={event => this.handleSubmit(event, addShot)}
                >
                  <label htmlFor="name">Shot Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Add Name"
                    onChange={this.handleChange}
                    value={name}
                  />
                  <input
                    type="text"
                    name="imageUrl"
                    placeholder="Shot image"
                    onChange={this.handleChange}
                    value={imageUrl}
                  />
                  <label htmlFor="description">Shot Description</label>
                  <input
                    type="text"
                    name="description"
                    placeholder="Add Description"
                    onChange={this.handleChange}
                    value={description}
                  />
                  <button
                    disabled={loading || this.validateForm()}
                    type="submit"
                  >
                    Submit
                  </button>

                  {error && <Error error={error} />}
                </form>
              </div>
            </div>
          );
        }}
      </Mutation>
    );
  }
}

export default withAuth(session => session && session.getCurrentUser)(
  withRouter(AddShot)
);
