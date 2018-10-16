import React from "react";
import { Mutation } from "react-apollo";
import { withRouter } from "react-router-dom";
import Styled from "styled-components";

import { SIGNIN_USER } from "../../queries";

import Error from "../Error";
import { Container } from "./Signup";
import { Form } from "./Signup";
import { HighlightedBtn } from "../../UI/UnAuthMessage";

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
      <Container>
        <Card>
          <div>
            <img
              src="http://www.jrentdesign.com/images/dribbble_type.png"
              alt="dribbble logo"
            />
          </div>
          <h2>Signin</h2>
          <Form>
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
                    <HighlightedBtn
                      style={{ alignSelf: "stretch" }}
                      type="submit"
                      disabled={loading || this.validateForm()}
                    >
                      Submit
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

export default withRouter(Signin);

const Card = Styled.div`
  text-align: center;
  margin: 4rem 0;
  > div:first-of-type {
    width: 23rem;
    margin: 0 auto;
    img {
      width: 100%
    }
  }
  h2 {
    font-size: 2.7rem;
    font-weight: 500;
    color: #999999;    
    padding-bottom: 2rem;
  }
  > div:last-of-type {
    width: 40rem;
    margin: 0 auto;
  }
  input {
    background: white !important;
  }
`;
