import React from "react";
import { Mutation } from "react-apollo";
import { withRouter } from "react-router-dom";
import Styled from "styled-components";

import { ADD_SHOT, GET_ALL_SHOTS, GET_USER_SHOTS } from "../../queries";

import Error from "../Error";
import withAuth from "../withAuth";
import { PinkBtn } from "../../styles/Buttons";
import { Form } from "../../styles/Form";
import { HeadingPrimary } from "../../styles/Heading";

const initialState = {
  name: "",
  image: "",
  largeImage: "",
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
    const { name, image, largeImage, description } = this.state;
    const isInvalid = !name || !image || !largeImage || !description;
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

  uploadFile = async e => {
    console.log("uploading file...");
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "dribble-clone");

    const res = await fetch(
      "https://res.cloudinary.com/drs4xxaa4/image/upload",
      {
        method: "POST",
        body: data
      }
    );
    const file = await res.json();
    console.log(file);
    this.setState({
      image: file.secure_url,
      largeImage: file.eager[0].secure_url
    });
  };

  componentDidMount() {
    // console.log(this.props.session.getCurrentUser.username);
    this.setState({
      username: this.props.session.getCurrentUser.username
    });
  }

  render() {
    const { name, image, largeImage, description, username } = this.state;

    return (
      <Mutation
        mutation={ADD_SHOT}
        variables={{ name, image, largeImage, description, username }}
        refetchQueries={() => [
          { query: GET_USER_SHOTS, variables: { username } }
        ]}
        update={this.updateCache}
      >
        {(addShot, { data, loading, error }) => {
          return (
            <AddShotContainer>
              <AddShotHeading>What are you working on?</AddShotHeading>
              <Form className="small-wrapper wrapper">
                <form onSubmit={event => this.handleSubmit(event, addShot)}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Add Name"
                    onChange={this.handleChange}
                    value={name}
                  />
                  <input
                    type="file"
                    name="file"
                    placeholder="Upload A Shot"
                    onChange={this.uploadFile}
                  />
                  <input
                    type="text"
                    name="description"
                    placeholder="Add Description"
                    onChange={this.handleChange}
                    value={description}
                  />
                  <PinkBtn
                    disabled={loading || this.validateForm()}
                    type="submit"
                  >
                    Add Shot
                  </PinkBtn>

                  {/* {error && <Error error={error} />} */}
                </form>
              </Form>
            </AddShotContainer>
          );
        }}
      </Mutation>
    );
  }
}

export default withAuth(session => session && session.getCurrentUser)(
  withRouter(AddShot)
);

const AddShotHeading = Styled(HeadingPrimary)`
    padding: 1.2rem 0;
    margin-bottom: 2rem;
    background: ${props => props.theme.gray7};
`;
const AddShotContainer = Styled.div`
  min-height: 100vh;
  text-align: center
`;
