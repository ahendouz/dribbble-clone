import { gql } from "apollo-boost";

import { shotFragments } from "./fragments";

// SHOTS QUERIES
export const GET_ALL_SHOTS = gql`
  query {
    getAllShots {
      ...CompleteShot
    }
  }
  ${shotFragments.shot}
`;

export const GET_SHOT = gql`
  query($_id: ID!) {
    getShot(_id: $_id) {
      ...CompleteShot
    }
  }
  ${shotFragments.shot}
`;

export const GET_CURRENT_USER = gql`
  query {
    getCurrentUser {
      username
      joinDate
      email
      favorites {
        _id
        name
      }
    }
  }
`;

export const GET_USER_SHOTS = gql`
  query($username: String!) {
    getUserShots(username: $username) {
      ...CompleteShot
    }
  }
  ${shotFragments.shot}
`;

// SHOT MUTATIONS
export const ADD_SHOT = gql`
  mutation(
    $name: String!
    $imageUrl: String!
    $description: String!
    $username: String!
  ) {
    addShot(
      name: $name
      imageUrl: $imageUrl
      description: $description
      username: $username
    ) {
      ...CompleteShot
    }
  }
  ${shotFragments.shot}
`;

export const DELETE_USER_SHOT = gql`
  mutation($_id: ID!) {
    deleteUserShot(_id: $_id) {
      _id
    }
  }
`;

export const LIKE_SHOT = gql`
  mutation($_id: ID!, $username: String!) {
    likeShot(_id: $_id, username: $username) {
      ...LikeShot
    }
  }
  ${shotFragments.like}
`;

export const UNLIKE_SHOT = gql`
  mutation($_id: ID!, $username: String!) {
    unlikeShot(_id: $_id, username: $username) {
      ...LikeShot
    }
  }
  ${shotFragments.like}
`;

export const SEARCH_SHOTS = gql`
  query($searchTerm: String) {
    searchShots(searchTerm: $searchTerm) {
      _id
      name
      likes
    }
  }
`;

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
