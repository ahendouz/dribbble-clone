import React, { Fragment } from "react";
import { Mutation } from "react-apollo";
import { withRouter, Link } from "react-router-dom";
import Styled from "styled-components";

import { SIGNIN_USER } from "../../queries";

import withAuth from "../withAuth";
import ErrorMessage from "../ErrorMessage";
import { PinkBtn } from "../../styles/Buttons";
import { Form } from "../../styles/Form";

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
    const { name, value } = event.target;
    // console.log(`${name}: ${value}`);
    this.setState({ [name]: value });
  };

  handleSubmit = (event, signinUser) => {
    event.preventDefault();
    signinUser().then(async ({ data }) => {
      // console.log(data);
      localStorage.setItem("token", data.signinUser.token);
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
      <Mutation mutation={SIGNIN_USER} variables={{ username, password }}>
        {(signinUser, { data, loading, error }) => {
          return (
            <Fragment>
              {error && (
                <SigninError>
                  <ErrorMessage error={error} />
                </SigninError>
              )}
              <SignInContainer>
                <div className="container">
                  <div className="logo">
                    <img
                      src="http://www.jrentdesign.com/images/dribbble_type.png"
                      alt="dribbble logo"
                    />
                  </div>
                  <h2>Signin</h2>
                  <SignInForm
                    onSubmit={event => this.handleSubmit(event, signinUser)}
                  >
                    <input
                      type="text"
                      name="username"
                      placeholder="Username"
                      value={username}
                      onChange={this.handleChange}
                    />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
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
                  <Mes>
                    Not a member? <Link to="/signup">Sign up now</Link>
                  </Mes>
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

const SigninError = Styled.div`
    background: #f55;
    color: white;
    padding: 1.4rem 0;
    text-align: center;
    font-size: 1.8rem;
`;

const SignInContainer = Styled.div`
  background: ${props => props.theme.gray3};
  min-height: 100vh;
  padding: 3rem 0;
  .container {
    text-align: center;
    padding: 4rem 0;
    .logo {
      width: 23rem;
      margin: 0 auto;
      img {
        width: 100%
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

const SignInForm = Styled(Form)`
  width: 40rem;
  }
  input {
    background: white !important;
  }
`;

const Mes = Styled.div`
  font-size: 1.4rem;
  color: ${props => props.theme.gray5};
  a {
    text-decoration: underline;
  }
`;
