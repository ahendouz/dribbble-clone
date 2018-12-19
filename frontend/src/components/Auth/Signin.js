import React, { Fragment } from "react";
import { Mutation } from "react-apollo";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";

import { SIGNIN } from "../../queries/Mutations";

import withAuth from "../../lib/withAuth";
import { SigninError } from "../Errors/ErrorMessage";
import { PinkBtn } from "../../styles/Buttons";
import { Form } from "../../styles/Form";
import UserImage from "../UI/UserImage";

const initialState = {
  username: "",
  password: ""
};

class Signin extends React.Component {
  state = { ...initialState };

  clearState = () => {
    this.setState({ ...initialState });
  };

  handleChange = event => {
    let { name, value } = event.target;
    name === "username" &&
      this.setState({ username: value.replace(/\s/g, "") });
    name === "password" && this.setState({ password: value });
  };

  handleSubmit = (event, signin) => {
    event.preventDefault();
    signin().then(async ({ data }) => {
      localStorage.setItem("token", data.signin.token);
      await this.props.refetch();
      this.clearState();
      this.props.history.push("/");
    });
  };

  validateForm = () => {
    const { username, password } = this.state;
    const isInvalid = !username || !password;
    return isInvalid;
  };

  render() {
    const { username, password } = this.state;
    return (
      <Mutation mutation={SIGNIN} variables={{ username, password }}>
        {(signin, { data, loading, error }) => {
          return (
            <Fragment>
              {error && <SigninError error={error} />}
              <SignInContainer>
                <div>
                  <div className="logo">
                    <img
                      src="http://www.jrentdesign.com/images/dribbble_type.png"
                      alt="dribbble logo"
                    />
                  </div>
                  <h2>Signin</h2>
                  <SignInForm
                    onSubmit={event => this.handleSubmit(event, signin)}
                  >
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      name="username"
                      value={username}
                      onChange={this.handleChange}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={this.handleChange}
                    />
                    <PinkBtn
                      style={{ alignSelf: "stretch" }}
                      type="submit"
                      disabled={loading || this.validateForm()}
                    >
                      Sign In
                    </PinkBtn>
                  </SignInForm>
                  <Message>
                    Not a member? <Link to="/signup">Sign up now</Link>
                  </Message>
                </div>
              </SignInContainer>
            </Fragment>
          );
        }}
      </Mutation>
    );
  }
}

export default withAuth(session => session && !session.getCurrentUser)(
  withRouter(Signin)
);

const SignInContainer = styled.div`
  background: ${props => props.theme.gray3};
  min-height: 100vh;
  padding: 3rem 0;
  > div {
    text-align: center;
    padding: 4rem 0;
    .logo {
      width: 23rem;
      margin: 0 auto;
      img {
        width: 100%;
      }
    }
    h2 {
      font-size: 2.7rem;
      font-weight: 500;
      color: ${props => props.theme.grey3};
      padding-bottom: 2rem;
    }
  }
`;

const SignInForm = styled(Form)`
  width: 40rem;
  input {
    background: white !important;
  }
`;

const Message = styled.div`
  font-size: 1.4rem;
  color: ${props => props.theme.gray5};
  a {
    text-decoration: underline;
  }
`;
