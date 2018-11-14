import React from "react";
import { Mutation } from "react-apollo";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import { ADD_SHOT, GET_ALL_SHOTS, GET_USER_SHOTS } from "../../queries";

import withAuth from "../withAuth";
import { PinkBtn } from "../../styles/Buttons";
import { Form } from "../../styles/Form";
import { HeadingPrimary } from "../../styles/Heading";

const initialState = {
  name: "",
  image: "",
  largeImage: "",
  description: "",
  username: "",
  fullname: "",
  userImg: ""
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

  handleSubmit = async (event, addShot) => {
    event.preventDefault();
    // const data = await addShot();
    // this.clearState();
    // this.props.history.push("/");
    addShot().then(({ data }) => {
      this.clearState();
      this.props.history.push("/");
    });
  };

  validateForm = () => {
    const { name, image, description } = this.state;
    const isInvalid = !name || !image || image === "loading" || !description;
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
      username: this.props.session.getCurrentUser.username,
      fullname: this.props.session.getCurrentUser.fullname,
      userImg: this.props.session.getCurrentUser.userImg
    });
  }

  uploadFile = async e => {
    // console.log("uploading file...");
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "dribble-clone");
    this.setState({ image: "loading" }); // todo
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/ahendouz/image/upload",
      {
        method: "POST",
        body: data
      }
    );
    const file = await res.json();
    // console.log(file);
    this.setState({
      image: file.secure_url,
      largeImage: file.secure_url
    });
  };

  render() {
    const {
      name,
      image,
      largeImage,
      description,
      username,
      fullname,
      userImg
    } = this.state;
    return (
      <Mutation
        mutation={ADD_SHOT}
        variables={{
          name,
          image,
          largeImage,
          description,
          username,
          fullname,
          userImg
        }}
        refetchQueries={() => [
          { query: GET_USER_SHOTS, variables: { username } }
        ]}
        update={this.updateCache}
      >
        {(addShot, { data, loading, error }) => {
          return (
            <AddShotContainer>
              <AddShotHeading>What are you working on?</AddShotHeading>
              <AddShotForm
                onSubmit={event => this.handleSubmit(event, addShot)}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Add Name"
                  onChange={this.handleChange}
                  value={name}
                />
                <fieldset
                  disabled={loading}
                  aria-busy={loading}
                  className="uploadFieldset"
                >
                  <label htmlFor="file">
                    Image
                    <input
                      type="file"
                      name="file"
                      disabled={this.state.image === "loading"}
                      placeholder="Upload an image"
                      onChange={this.uploadFile}
                    />
                    {this.state.image === "loading" ? (
                      <p>Loading...</p>
                    ) : this.state.image === "" ? null : (
                      <img
                        width="200"
                        src={this.state.image}
                        alt="Upload Preview"
                      />
                    )}
                  </label>
                </fieldset>
                <textarea
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
              </AddShotForm>
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

const AddShotHeading = styled(HeadingPrimary)`
  padding: 5.2rem 0 2rem 0;
`;
const AddShotContainer = styled.div`
  min-height: 100vh;
  text-align: center;
`;
const AddShotForm = styled(Form)`
  width: 55rem;
`;
