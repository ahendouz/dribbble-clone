import React, { Fragment } from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";
import { Mutation } from "react-apollo";

import { SIGNUP_USER } from "../../queries";

import ErrorMessage from "../ErrorMessage";
import withAuth from "../withAuth";
import { Form } from "../../styles/Form";
import { PinkBtn } from "../../styles/Buttons";
import Logo from "../UI/Logo";

const emailRegex = RegExp(
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
);

const initialState = {
  email: "",
  password: "",
  fullname: "",
  username: "",
  validationErrors: {
    email: "",
    password: "",
    fullname: "",
    username: ""
  }
};

class Signup extends React.Component {
  state = { ...initialState };

  clearState = () => {
    this.setState({ ...initialState });
  };

  handleChange = event => {
    const { name, value } = event.target;
    let { validationErrors } = { ...this.state };

    // For validation
    switch (name) {
      case "email":
        validationErrors.email =
          value.length === 0
            ? "Email can't be blank"
            : emailRegex.test(value)
              ? ""
              : "Email is invalid";
        break;
      case "password":
        validationErrors.password =
          value.length === 0
            ? "Password can't be blank"
            : value.length < 6
              ? "Password is too short (minimum is 6 characters)"
              : "";
        break;
      case "fullname":
        validationErrors.fullname =
          value.length === 0 ? "Name can't be blank" : "";
        break;
      case "username":
        validationErrors.username =
          value.length === 0 ? "Username can't be blank" : "";
        break;
      default:
        break;
    }

    this.setState({ validationErrors, [name]: value });
  };

  handleSubmit = (event, signupUser) => {
    event.preventDefault();
    signupUser().then(async ({ data }) => {
      localStorage.setItem("token", data.signupUser.token);
      await this.props.refetch();
      this.clearState();
      this.props.history.push("/");
    });
  };

  validateForm = () => {
    const {
      email,
      password,
      fullname,
      username,
      validationErrors
    } = this.state;
    const isInvalid =
      !email ||
      !password ||
      !fullname ||
      !username ||
      validationErrors.email !== "" ||
      validationErrors.password !== "" ||
      validationErrors.fullname !== "" ||
      validationErrors.username !== "";
    return isInvalid;
  };

  render() {
    const { email, password, fullname, username } = this.state;
    return (
      <BigContainer>
        <SignUpContainer>
          <Artwork>
            <div className="left--text">
              <Logo name="dribbble-logo" />
              <h1>Discover the world’s top Designers & Creatives</h1>
              <p>Art by Alexa Erkaeva</p>
            </div>
            <div className="right--artworkImg">
              <img
                src="https://res.cloudinary.com/ahendouz/image/upload/c_crop,h_800,w_480/v1541485504/af3618b725cb2721b2e1778d2515eac5.gif"
                alt="artwork"
              />
            </div>
          </Artwork>

          <FormContainer>
            <h2 className="title">Sign Up With Email</h2>
            <Mutation
              mutation={SIGNUP_USER}
              variables={{
                email,
                password,
                fullname,
                username
              }}
            >
              {(signupUser, { data, loading, error }) => {
                return (
                  <Fragment>
                    <ErrorMessage
                      type="signup"
                      validationErrors={this.state.validationErrors}
                      error={error}
                    />
                    <Form
                      onSubmit={event => this.handleSubmit(event, signupUser)}
                    >
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={this.handleChange}
                      />
                      <fieldset className="passwordFieldset">
                        <input
                          type="password"
                          name="password"
                          placeholder="Password"
                          value={password}
                          className="passwordInput"
                          onChange={this.handleChange}
                        />
                        <p>Minimum 6 characters</p>
                      </fieldset>
                      <input
                        type="text"
                        name="fullname"
                        placeholder="First and last name"
                        value={fullname}
                        onChange={this.handleChange}
                      />
                      <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={username}
                        onChange={this.handleChange}
                      />
                      <PinkBtn
                        className="submitBtn"
                        type="submit"
                        disabled={loading || this.validateForm()}
                      >
                        Create Account
                      </PinkBtn>
                      {/* {error && <Error error={error} />} */}
                    </Form>
                  </Fragment>
                );
              }}
            </Mutation>
          </FormContainer>

          <Message>
            Already a member? <Link to="/signin">Sign in</Link>
          </Message>
        </SignUpContainer>
      </BigContainer>
    );
  }
}

export default withAuth(session => session && !session.getCurrentUser)(
  withRouter(Signup)
);

const BigContainer = styled.div`
  background: ${props => props.theme.gray3};
  padding: 3rem 0;
  @media (max-width: ${props => props.theme.breakPoint12}) {
    padding: 1rem;
  }
  @media (max-width: ${props => props.theme.breakPoint16}) {
    padding: 0rem;
    background: ${props => props.theme.white};
  }
`;

const SignUpContainer = styled.div`
  width: 70rem;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
  text-align: center;
  box-shadow: ${props => props.theme.shadow2};
  @media (max-width: ${props => props.theme.breakPoint12}) {
    width: auto;
  }
  @media (max-width: ${props => props.theme.breakPoint16}) {
    box-shadow: none;
    border-radius: 0;
  }
`;

const Artwork = styled.div`
  background: ${props => props.theme.highlight4};
  height: 25rem;
  display: flex;
  align-items: center;
  @media (max-width: ${props => props.theme.breakPoint17}) {
    flex-direction: column-reverse;
    padding-bottom: 2rem;
    height: auto;
  }
  .left--text {
    padding-left: 3.8rem;
    color: ${props => props.theme.highlight5};
    font-size: 1.2rem;
    text-align: left;
    @media (max-width: ${props => props.theme.breakPoint12}) {
      font-size: 1rem;
    }
    @media (max-width: ${props => props.theme.breakPoint16}) {
      font-size: .9rem;
    }
    @media (max-width: ${props => props.theme.breakPoint17}) {
      padding-left: 0;
      text-align: center;
    }
    .dribbble-logo {
        svg {
          width: 25px;
          height: 100%;
          fill: ${props => props.theme.gray9}
        }
    }
    h1 {
      padding: 1.4rem 0 2.2rem 0;
      @media (max-width: ${props => props.theme.breakPoint17}) {
        padding: 1.4rem 0 1.5rem 0;
      } 
    }
    p {
      font-size: 1.2rem
      opacity: .6;
      @media (max-width: ${props => props.theme.breakPoint17}) {
      } 
    }
  }
  .right--artworkImg {
    height: 100%;
    flex-basis: 70%;
    @media (max-width: ${props => props.theme.breakPoint17}) {
      height: 15rem;
    }
    img {
      height: 100%
    }
  }
`;

const FormContainer = styled.div`
  background-color: ${props => props.theme.white};
  .title {
    padding-top: 2rem;
    color: ${props => props.theme.gray4};
  }
`;

const Message = styled.div`
  background-color: ${props => props.theme.white};
  padding: 3rem 0;
  font-size: 1.4rem;
  font-weight: 500;
  color: ${props => props.theme.gray4};
  border-top: 1px solid ${props => props.theme.gray7};
  @media (max-width: ${props => props.theme.breakPoint16}) {
    border-top: none;
    padding-top: 0.4rem;
  }
  a {
    color: ${props => props.theme.highlight1};
  }
`;
