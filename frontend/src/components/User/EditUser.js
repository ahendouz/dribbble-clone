import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";
import styled from "styled-components";

import { client } from "../../index";

import { EDIT_USER } from "../../queries/Mutations";
import DeleteUser from "./DeleteUser";
import withAuth from "../../lib/withAuth";

import { PinkBtn, DarkBtn } from "../../styles/Buttons";
import { Form } from "../../styles/Form";
import { FullnameHighlighted } from "../../styles/FullnameHighlighted";

// user query
const USER = gql`
  query($id: ID!) {
    user(where: { id: $id }) {
      id
      fullname
      profileImage
      bio
      skills
      location
    }
  }
`;
class EditUser extends Component {
  state = {
    id: "",
    fullname: "",
    profileImage: "",
    bio: "",
    skills: "",
    location: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event, editUser) => {
    event.preventDefault();
    const data = await editUser();
    this.props.history.push("/");
  };

  deleteProfileImage = event => {
    event.preventDefault();
    this.setState({
      profileImage:
        "https://res.cloudinary.com/ahendouz/image/upload/v1542008638/avatar-default-aa2eab7684294781f93bc99ad394a0eb3249c5768c21390163c9f55ea8ef83a4.png"
    });
  };

  componentDidMount = () => {
    const { userId: id } = this.props.match.params;
    client
      .query({ query: USER, variables: { id } })
      .then(
        ({
          data: {
            user: { id, fullname, profileImage, bio, skills, location }
          }
        }) =>
          this.setState({
            id,
            fullname,
            profileImage,
            bio: bio ? bio : "",
            skills,
            location: location ? location : ""
          })
      );
  };

  uploadProfileImg = async event => {
    const files = event.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "dribble-clone");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/ahendouz/image/upload",
      {
        method: "POST",
        body: data
      }
    );
    const file = await res.json();
    this.setState({
      profileImage: file.secure_url
    });
  };
  const;
  render() {
    const { id, profileImage, fullname, bio, skills, location } = this.state;
    const { session } = this.props;
    if (id) {
      if (id !== session.getCurrentUser.id) return <Redirect to="/" />;
    }
    return (
      <Container>
        <User>
          <div className="userImg">
            <img src={profileImage} alt={fullname} />
          </div>
          <div className="userInfo">
            <h1>
              <FullnameHighlighted>{fullname}</FullnameHighlighted>
              <span>
                {" "}
                &#47; <span>Profile</span>
              </span>
            </h1>
            <p>Edit your name, avatar, etc.</p>
          </div>
        </User>
        <Mutation
          mutation={EDIT_USER}
          variables={{ id, profileImage, fullname, bio, skills, location }}
          refetchQueries={() => [{ query: USER, variables: { id } }]}
        >
          {editUser => {
            return (
              <EditUserInfo>
                <AccountForm
                  onSubmit={event => this.handleSubmit(event, editUser)}
                >
                  <ProfileImg>
                    <div className="userImg">
                      <img src={profileImage} alt={fullname} />
                    </div>
                    <div className="btns">
                      <div className="uploadProfileImg">
                        <PinkBtn>Upload new picture</PinkBtn>
                        <input type="file" onChange={this.uploadProfileImg} />
                      </div>
                      <DarkBtn
                        onClick={event => this.deleteProfileImage(event)}
                      >
                        Delete
                      </DarkBtn>
                    </div>
                  </ProfileImg>

                  <fieldset>
                    <label htmlFor="fullname">fullname</label>
                    <input
                      type="text"
                      name="fullname"
                      onChange={this.handleChange}
                      value={fullname}
                    />
                  </fieldset>
                  <fieldset>
                    <label htmlFor="fullname">Bio</label>
                    <input
                      type="text"
                      name="bio"
                      onChange={this.handleChange}
                      value={bio}
                    />
                  </fieldset>
                  <fieldset>
                    <label htmlFor="fullname">Location</label>
                    <input
                      type="text"
                      name="location"
                      onChange={this.handleChange}
                      value={location}
                    />
                  </fieldset>
                  <div className="submitOrDelBtns">
                    <PinkBtn type="submit">Save</PinkBtn>
                    <DeleteUser userId={id} />
                  </div>
                </AccountForm>
              </EditUserInfo>
            );
          }}
        </Mutation>
      </Container>
    );
  }
}

export default withAuth(session => session && session.getCurrentUser)(
  withRouter(EditUser)
);

//     const {
//       _id,
//       fullname: currentFullname,
//       userImg: currentUserImg
//     } = this.props.session.getCurrentUser;
//     const { fullname, userImg } = this.state;
//     return (
//
//     );
//   }
// }

const Container = styled.div`
  min-height: 89vh;
  width: 80rem;
  margin: 0 auto;
  max-width: 100%;
  .btns,
  .submitOrDelBtns {
    display: flex;
    button {
      padding: 1rem 1.8rem;
      cursor: pointer;
    }
  }
`;

const User = styled.div`
  min-height: 4rem;
  display: flex;
  align-items: center;
  margin: 3rem 0;
  .userImg {
    width: 5rem;
    height: 5rem;
    overflow: hidden;
    border-radius: 50%;
    img {
      width: 100%;
    }
  }
  .userInfo {
    margin-left: 1.4rem;
    h1 {
      line-height: 1;
      span {
        font-size: 2rem !important;
      }
      > span:last-of-type {
        color: ${props => props.theme.gray6};
        span {
          color: ${props => props.theme.gray11};
        }
      }
    }
    p {
      color: ${props => props.theme.gray12};
      font-size: 1.4rem;
    }
  }
`;
const EditUserInfo = styled.div`
  .submitOrDelBtns {
    justify-content: space-between;
  }
`;
const ProfileImg = styled.div`
  display: flex;
  align-items: center;
  margin: 3rem 0;
  .userImg {
    width: 8rem;
    height: 8rem;
    overflow: hidden;
    border-radius: 50%;
    img {
      width: 100%;
    }
  }
  .btns {
    margin-left: 2rem;
    .uploadProfileImg {
      position: relative;
      overflow: hidden;
      display: inline-block;
      input {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        opacity: 0;
        cursor: pointer;
      }
    }
    > button {
      margin-left: 1.5rem;
    }
  }
`;

const AccountForm = styled(Form)`
  margin: 1rem 0;
`;
