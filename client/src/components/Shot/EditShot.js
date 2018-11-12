import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { Mutation } from "react-apollo";
import styled from "styled-components";

import { GET_SHOT, UPDATE_USER_SHOT } from "../../queries";
import { client } from "../../index";
import withAuth from "../withAuth";

import { Form } from "../../styles/Form";
import { PinkBtn } from "../../styles/Buttons";
import { GrayBtn } from "../../styles/Buttons";

// const { _id } = this.props.match.params;
class EditShot extends Component {
  state = {
    name: "",
    description: "",
    largeImage: "",
    username: ""
  };

  handleChange = (event, val) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  componentDidMount() {
    const { _id } = this.props.match.params;
    client
      .query({ query: GET_SHOT, variables: { _id } })
      .then(
        ({
          data: {
            getShot: { name, description, largeImage, username }
          }
        }) =>
          this.setState({
            name,
            description,
            largeImage,
            username
          })
      );
  }

  handleSubmit = async (event, updateUserShot) => {
    event.preventDefault();
    const data = await updateUserShot();
    const { _id } = this.props.match.params;
    this.props.history.push(`/shot/${_id}`);
  };

  cancel = () => {
    const { _id } = this.props.match.params;
    this.props.history.push(`/shot/${_id}`);
  };

  render() {
    const { name, description, largeImage, username } = this.state;
    const { _id } = this.props.match.params;
    const { session } = this.props;

    return session.getCurrentUser.username === username ? (
      <Mutation
        mutation={UPDATE_USER_SHOT}
        variables={{ _id, name, description }}
      >
        {updateUserShot => {
          return (
            <Container>
              <Shot>
                <img src={largeImage} alt="Shot" />
              </Shot>
              <EditShotForm
                onSubmit={event => {
                  this.handleSubmit(event, updateUserShot);
                }}
              >
                <fieldset className="editShotFieldset">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Title"
                    onChange={this.handleChange}
                    value={name}
                  />
                </fieldset>
                <fieldset className="editShotFieldset">
                  <label htmlFor="title">Description</label>
                  <textarea
                    type="text"
                    name="description"
                    placeholder="Description"
                    onChange={this.handleChange}
                    value={description}
                  />
                </fieldset>
                <div className="btns">
                  <PinkBtn type="submit">Save Changes</PinkBtn>
                  <GrayBtn type="button" onClick={this.cancel}>
                    Cancel
                  </GrayBtn>
                </div>
              </EditShotForm>
            </Container>
          );
        }}
      </Mutation>
    ) : (
      <Redirect to={`/shot/${_id}`} />
    );
  }
}
export default withAuth(session => session && session.getCurrentUser)(
  withRouter(EditShot)
);

const Container = styled.div`
  width: 92rem;
  margin: 0 auto;
  max-width: 100%;
  padding: 3rem 0;
  display: flex;
  justify-content: space-between;
  > div,
  > form {
    flex-basis: 47%;
  }
`;

const Shot = styled.div`
  padding: 2rem;
  background: white;
  border-radius: 3px;
  box-shadow: ${props => props.theme.shadow5};
  img {
    width: 100%;
  }
`;

const EditShotForm = styled(Form)`
  margin: 0;
  padding: 0;
  .btns {
    > button:first-of-type {
      padding: 0.7rem 1.4rem;
      border: 1px solid ${props => props.theme.highlight2};
      margin-right: 1.4rem;
    }
  }
`;
