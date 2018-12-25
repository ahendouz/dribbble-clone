import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import styled from "styled-components";

import { EDIT_SHOT } from "../../queries/Mutations";
import { client } from "../../index";
import withAuth from "../../lib/withAuth";

import { Form } from "../../styles/Form";
import { PinkBtn } from "../../styles/Buttons";
import { GrayBtn } from "../../styles/Buttons";

const SHOT = gql`
  query($id: ID!) {
    shot(where: { id: $id }) {
      id
      title
      description
      image
      tags
    }
  }
`;
class EditShot extends Component {
  state = {
    id: "",
    title: "",
    description: "",
    image: "",
    username: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    client
      .query({ query: SHOT, variables: { id } })
      .then(({ data: { shot: { id, title, description, image, tags } } }) =>
        this.setState({
          id,
          title,
          description,
          image,
          tags: tags.toString().replace(/,/g, " ")
        })
      );
  }

  handleSubmit = async (event, updateUserShot) => {
    event.preventDefault();
    const data = await updateUserShot();
    const { id } = this.props.match.params;
    this.props.history.push(`/shot/${id}`);
  };

  cancel = () => {
    const { id } = this.props.match.params;
    this.props.history.push(`/shot/${id}`);
  };

  render() {
    const { id, title, description, image, tags: tagsString } = this.state;
    const tags =
      tagsString && this.state.tags.split(" ").filter(tag => tag !== "");
    return (
      <Mutation
        mutation={EDIT_SHOT}
        variables={{ id, title, description, tags }}
        refetchQueries={() => [{ query: SHOT, variables: { id } }]}
      >
        {updateUserShot => {
          return (
            <Container>
              <Shot>
                <img src={image} alt="Shot" />
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
                    name="title"
                    placeholder="Title"
                    onChange={this.handleChange}
                    value={title}
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
                <fieldset className="editShotFieldset">
                  <label htmlFor="title">Tags</label>
                  <textarea
                    type="text"
                    name="tags"
                    placeholder="Tags"
                    onChange={this.handleChange}
                    value={tagsString}
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
  align-self: self-start;
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
