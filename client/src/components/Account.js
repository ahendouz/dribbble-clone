import React, { Component } from "react";
import styled from "styled-components";
import { Mutation } from "react-apollo";
import { withRouter } from "react-router-dom";

import { UPDATE_USER, GET_ALL_SHOTS } from "../queries";

import { GrayBtn, PinkBtn, DarkBtn } from "../styles/Buttons";
import { Form } from "../styles/Form";
import { FullnameHighlighted } from "../styles/FullnameHighlighted";

class Account extends Component {
  state = {
    fullname: "",
    userImg: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event, updateUser) => {
    event.preventDefault();
    const data = await updateUser();
    // console.log(data);
    this.props.history.push("/");
  };

  componentDidMount = () => {
    const { fullname, userImg } = this.props.session.getCurrentUser;
    this.setState({
      fullname,
      userImg
    });
  };

  uploadProfileImg = async event => {
    // console.log("uploading image...");
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
    // console.log(file);
    this.setState({
      userImg: file.secure_url
    });
  };

  render() {
    const {
      _id,
      fullname: currentFullname,
      userImg: currentUserImg
    } = this.props.session.getCurrentUser;
    const { fullname, userImg } = this.state;
    return (
      <Container>
        <User>
          <div className="userImg">
            <img src={currentUserImg} alt={currentFullname} />
          </div>
          <div className="userInfo">
            <h1>
              <FullnameHighlighted>{currentFullname}</FullnameHighlighted>
              <span>
                {" "}
                &#47; <span>Profile</span>
              </span>
            </h1>
            <p>Edit your name, avatar, etc.</p>
          </div>
        </User>
        <Mutation
          mutation={UPDATE_USER}
          variables={{ _id, fullname, userImg }}
          refetchQuery={() => [{ query: GET_ALL_SHOTS }]}
          //   update={(cache, data) => {
          //     console.log(cache.data.data, data);
          //   }}
        >
          {updateUser => {
            return (
              <EditUserInfo>
                <AccountForm
                  onSubmit={event => this.handleSubmit(event, updateUser)}
                >
                  <ProfileImg>
                    <div className="userImg">
                      <img src={userImg} alt={fullname} />
                    </div>
                    <div className="btns">
                      <div className="uploadProfileImg">
                        <PinkBtn>Upload new picture</PinkBtn>
                        <input type="file" onChange={this.uploadProfileImg} />
                      </div>
                      <DarkBtn>Delete</DarkBtn>
                    </div>
                  </ProfileImg>

                  <fieldset>
                    <label htmlFor="fullname">Name</label>
                    <input
                      type="text"
                      name="fullname"
                      onChange={this.handleChange}
                      value={fullname}
                    />
                  </fieldset>
                  <div className="submitOrDelBtns">
                    <PinkBtn type="submit">Save</PinkBtn>
                    <GrayBtn type="button">Delete Your Account</GrayBtn>
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
export default withRouter(Account);

const Container = styled.div`
    min-height: 89vh;
  width: 80rem;
  margin: 0 auto;
  max-width: 100%;
  .btns, .submitOrDelBtns {
    display: flex
    button {
        padding: 1rem 1.8rem;
        cursor: pointer;
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
