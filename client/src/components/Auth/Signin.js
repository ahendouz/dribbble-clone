import React from "react";
import { Mutation } from "react-apollo";
import { withRouter, Link } from "react-router-dom";
import Styled from "styled-components";

import { SIGNIN_USER } from "../../queries";

import Error from "../Error";
import { Form } from "../../styles/Form";
import { PinkBtn } from "../../styles/Buttons";
import withAuth from "../withAuth";

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
    const { session } = this.props;
    return (
      <SignInContainer>
        <div className="container">
          <div className="logo">
            <img
              src="http://www.jrentdesign.com/images/dribbble_type.png"
              alt="dribbble logo"
            />
          </div>
          <h2>Signin</h2>
          <SignInForm>
            <Mutation mutation={SIGNIN_USER} variables={{ username, password }}>
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
                      Submit
                    </PinkBtn>
                    {/* {error && <Error error={error} />} */}
                  </form>
                );
              }}
            </Mutation>
          </SignInForm>
          <Mes>
            Not a member? <Link to="/signup">Sign up now</Link>
          </Mes>
        </div>
      </SignInContainer>
    );
  }
}

export default withAuth(session => session && !session.getCurrentUser)(
  withRouter(Signin)
);

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
  margin: 0 auto;
  }
  input {
    background: white !important;
  }
`;

const Mes = Styled.div`
  font-size: 1.4rem;
  color: ${props => props.theme.gray4};
`;
