import { gql } from "apollo-boost";

// SHOTS QUERIES
export const GET_ALL_SHOTS = gql`
  query {
    getAllShots {
      _id
      name
    }
  }
`;

export const GET_SHOT = gql`
  query($_id: ID!) {
    getShot(_id: $_id) {
      _id
      name
      description
      createDate
      likes
      username
    }
  }
`;

export const GET_CURRENT_USER = gql`
  query {
    getCurrentUser {
      username
      joinDate
      email
    }
  }
`;

// ShotS MUTATIONS

export const ADD_SHOT = gql`
  mutation(
    $name: String!
    $description: String!
    $username: String!
  ) {
    addShot(
      name: $name
      description: $description
      username: $username
    ) {
      _id
      name
      description
      createDate
      likes
      username
    }
  }
`;

// export const SEARCH_SHOT = gql`
//   query($searchTerm: String) {

//   }
// `

// USER  QUERIES

// USER  MUTATIONS
export const SIGNIN_USER = gql`
  mutation($username: String!, $password: String!) {
    signinUser(username: $username, password: $password) {
      token
    }
  }
`;
export const SIGNUP_USER = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    signupUser(username: $username, email: $email, password: $password) {
      token
    }
  }
`;
