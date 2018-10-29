import React from "react";
import { withRouter, Link } from "react-router-dom";
import Styled from "styled-components";
import { Mutation } from "react-apollo";

import { SIGNUP_USER } from "../../queries";

import { Form } from "../../styles/Form";
import { PinkBtn } from "../../styles/Buttons";
import withAuth from "../withAuth";

const initialState = {
  username: "",
  email: "",
  password: "",
  passwordConfirmation: ""
};

class Signup extends React.Component {
  state = { ...initialState };

  clearState = () => {
    this.setState({ ...initialState });
  };

  handleChange = event => {
    const { name, value } = event.target;
    // console.log(`${name}: ${value}`);
    this.setState({ [name]: value });
  };

  handleSubmit = (event, signupUser) => {
    event.preventDefault();
    signupUser().then(async ({ data }) => {
      // console.log(data);
      localStorage.setItem("token", data.signupUser.token);
      await this.props.refetch();
      this.clearState();
      this.props.history.push("/");
    });
  };

  validateForm = () => {
    const { username, email, password, passwordConfirmation } = this.state;
    const isInvalid =
      !username ||
      !email ||
      !password ||
      !passwordConfirmation ||
      password !== passwordConfirmation;
    return isInvalid;
  };
  render() {
    const { username, email, password, passwordConfirmation } = this.state;
    return (
      <SignUpContainer>
        <div className="container">
          <div className="artwork">
            <div className="text">
              <img
                className="dribbbleLogo"
                src="http://www.jrentdesign.com/images/dribbble_type.png"
                alt="dribbble logo"
              />
              <h1>Discover the world’s top Designers & Creatives</h1>
              <p>Art by Alexa Erkaeva</p>
            </div>
            <img
              className="artworkImg"
              src="https://i.pinimg.com/originals/af/36/18/af3618b725cb2721b2e1778d2515eac5.gif"
              alt="artwork"
            />
          </div>
          <Form>
            <h3 className="heading">Sign Up With Email</h3>
            <Mutation
              mutation={SIGNUP_USER}
              variables={{ username, email, password, passwordConfirmation }}
            >
              {(signupUser, { data, loading, error }) => {
                return (
                  <form
                    onSubmit={event => this.handleSubmit(event, signupUser)}
                  >
                    <input
                      type="text"
                      name="username"
                      placeholder="Username"
                      value={username}
                      onChange={this.handleChange}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={this.handleChange}
                    />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={password}
                      onChange={this.handleChange}
                    />
                    <input
                      type="password"
                      name="passwordConfirmation"
                      placeholder="Confirm Password"
                      value={passwordConfirmation}
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
                  </form>
                );
              }}
            </Mutation>
          </Form>
          <Mes>
            Already a member? <Link to="/signin">Sign in</Link>
          </Mes>
        </div>
      </SignUpContainer>
    );
  }
}

export default withAuth(session => session && !session.getCurrentUser)(
  withRouter(Signup)
);

const SignUpContainer = Styled.div`
  background: ${props => props.theme.gray3};
  min-height: 100vh;
  padding: 3rem 0;
  .container {
    width: 70rem;
    margin: 0 auto;
    border-radius: 15px;
    overflow: hidden;
    background: white
    text-align: center;
    box-shadow: ${props => props.theme.shadow2};
    .artwork {
      background: ${props => props.theme.highlight4};
      height: 25rem;
      display: flex;
      align-items: center;
      .text {
        padding-left: 3.8rem;
        color: ${props => props.theme.highlight5};
        font-size: 1.2rem;
        text-align: left;
        .dribbbleLogo {
          height: 2.5rem;
        }
        > h1 {
          padding: 1.4rem 0 2.2rem 0;
        }
      }
      .artworkImg {
        height: 100%;
      }
    }
  }
`;

const Mes = Styled.div`
  padding: 3rem 0;
  font-size: 1.4rem;
  font-weight: 500;
  color: ${props => props.theme.gray3}
  border-top: 1px solid ${props => props.theme.gray7};
  a {
    color: ${props => props.theme.highlight1};
  }
`;
