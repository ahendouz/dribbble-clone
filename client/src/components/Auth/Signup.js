import React from "react";
import { withRouter, Link } from "react-router-dom";
import Styled from "styled-components";
import { Mutation } from "react-apollo";

import { SIGNUP_USER } from "../../queries";

import { Form } from "../../styles/Form";
import { PinkBtn } from "../../styles/Buttons";
import withAuth from "../withAuth";
import Logo from "../UI/Logo";

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
      <BigContainer>
        <SignUpContainer>
          <Artwork>
            <div className="left--text">
              <Logo className="dribbble-logo" name="dribbble-logo" />
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
              variables={{ username, email, password, passwordConfirmation }}
            >
              {(signupUser, { data, loading, error }) => {
                return (
                  <Form
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
                  </Form>
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

const BigContainer = Styled.div`
  background: ${props => props.theme.gray3};
  padding: 3rem 0;
  @media (max-width: ${props => props.theme.breakPoint12}) {
    padding: 1rem
  }
  @media (max-width: ${props => props.theme.breakPoint16}) {
    padding: 0rem;
    background: ${props => props.theme.white};
  }
`;

const SignUpContainer = Styled.div`
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

const Artwork = Styled.div`
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
      height: 2.5rem;
      width: 10rem;
      fill: ${props => props.theme.gray9}
    }
    h1 {
      padding: 1.4rem 0 2.2rem 0;
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

const FormContainer = Styled.div`
  background-color: ${props => props.theme.white};
  .title {
    padding-top: 2rem;
    color: ${props => props.theme.gray4}
  }
`;

const Message = Styled.div`
  background-color: ${props => props.theme.white};
  padding: 3rem 0;
  font-size: 1.4rem;
  font-weight: 500;
  color: ${props => props.theme.gray4}
  border-top: 1px solid ${props => props.theme.gray7};
  @media (max-width: ${props => props.theme.breakPoint16}) {
    border-top: none;
    padding: 0;
  }
  a {
    color: ${props => props.theme.highlight1};
  }
`;
