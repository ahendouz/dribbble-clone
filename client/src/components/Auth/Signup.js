import React from "react";
import { Mutation } from "react-apollo";
import { withRouter } from "react-router-dom";
import Styled from "styled-components";
import { SIGNUP_USER } from "../../queries";

import Error from "../Error";
import { HighlightedBtn } from "../../UI/UnAuthMessage";

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
      <Container>
        <Card>
          <Header>
            <div>
              <img
                src="http://www.jrentdesign.com/images/dribbble_type.png"
                alt="dribbble logo"
              />
              <h1>Discover the world’s top Designers & Creatives</h1>
              <p>Art by Alexa Erkaeva</p>
            </div>
            <img
              src="https://cdn.dribbble.com/assets/signup-banners/desgners-mind-9d7cdfef4794865d3a1ee8b05afaa8d092989b77a51ff94b7dbe275a835b25e9.gif"
              alt="artwork"
            />
          </Header>
          <Form>
            <h3>Sign Up With Email</h3>
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
                    <HighlightedBtn
                      type="submit"
                      disabled={loading || this.validateForm()}
                    >
                      Create Account
                    </HighlightedBtn>
                    {error && <Error error={error} />}
                  </form>
                );
              }}
            </Mutation>
          </Form>
        </Card>
      </Container>
    );
  }
}

export default withRouter(Signup);

export const Container = Styled.div`
  background: #383A3F
  min-height: 100vh;
  padding-top: 3rem;
`;

const Card = Styled.div`
  width: 70rem;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
  background: white
  text-align: center;
  box-shadow: 0px 0px 19px 4px #292b2f
`;

const Header = Styled.div`
  background: #f9675e;
  height: 26rem;
  display: flex;
  align-items: center;
  > div {
    padding-left: 3.8rem;
    color: #4f2589;
    font-size: 1.2rem;
    text-align: left;
    > img {
      height: 2.5rem;
    }
    > h1 {
      padding: 1.4rem 0 2.2rem 0;
    }
  }
  img {
    height: 100%;
  }
`;

export const Form = Styled.div`
  padding: 2rem;
  > h3 {
    padding: 1rem 0;
    color: #444;
    font-size: 1.5rem;
  }
  form {
    display: flex;
    flex-direction: column;
    > input {
      margin-bottom: 1.3rem;
      padding: 10px 12px;
      font-family: "Haas Grot Text R Web","Helvetica Neue",Helvetica,Arial,sans-serif;
      color: #333;
      border: none;
      background: rgba(0,0,0,0.07);
      border-radius: 6px;
      box-shadow: inset 0 1px 2px rgba(0,0,0,0.15);
      font-size: 16px;
    }
    > button {
      align-self: center;
      padding: 1.3rem 1.8rem;
    }
 }
`;
