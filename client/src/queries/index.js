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
      _id
      username
      joinDate
      email
      fullname
      favorites {
        ...CompleteShot
      }
      userImg
    }
  }
  ${shotFragments.shot}
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
    $image: String!
    $largeImage: String!
    $description: String!
    $username: String!
    $fullname: String!
    $userImg: String!
  ) {
    addShot(
      name: $name
      image: $image
      largeImage: $largeImage
      description: $description
      username: $username
      fullname: $fullname
      userImg: $userImg
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

export const UPDATE_USER_SHOT = gql`
  mutation($_id: ID, $name: String!, $description: String!) {
    updateUserShot(_id: $_id, name: $name, description: $description) {
      _id
      name
      description
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
  mutation(
    $username: String!
    $email: String!
    $password: String!
    $fullname: String!
  ) {
    signupUser(
      username: $username
      email: $email
      password: $password
      fullname: $fullname
    ) {
      token
    }
  }
`;

export const UPDATE_USER = gql`
  mutation($_id: ID, $fullname: String!, $userImg: String!) {
    updateUser(_id: $_id, fullname: $fullname, userImg: $userImg) {
      _id
      fullname
      userImg
    }
  }
`;
