import { gql } from "apollo-boost";

// CREATING PART
export const CREATE_SHOT = gql`
  mutation(
    $title: String!
    $description: String!
    $image: String!
    $largeImage: String!
    $tags: [String!]
    $colors: [String!]
  ) {
    createShot(
      title: $title
      description: $description
      image: $image
      largeImage: $largeImage
      tags: $tags
      colors: $colors
    ) {
      id
      title
    }
  }
`;

export const COMMENT_SHOT = gql`
  mutation($comment: String!, $shotId: String!) {
    commentShot(comment: $comment, shotId: $shotId) {
      id
    }
  }
`;

export const LIKEUNLIKESHOT = gql`
  mutation($shotId: String!) {
    likeUnlikeShot(shotId: $shotId) {
      id
    }
  }
`;

// EDIT SHOT
export const EDIT_SHOT = gql`
  mutation(
    $id: ID!
    $title: String
    $description: String
    # $image: String
    # $largeImage: String
    $tags: [String!]
  ) {
    editShot(
      id: $id
      title: $title
      description: $description
      # image: $image
      # largeImage: $largeImage
      tags: $tags
    ) {
      id
    }
  }
`;

// DELETE SHOT
export const DELETE_SHOT = gql`
  mutation($id: ID!) {
    deleteShot(id: $id) {
      id
    }
  }
`;

// AUTHENTICATION PART
export const SIGNIN = gql`
  mutation($username: String!, $password: String!) {
    signin(username: $username, password: $password) {
      token
    }
  }
`;

export const SIGNUP = gql`
  mutation(
    $username: String!
    $email: String!
    $password: String!
    $fullname: String!
  ) {
    signup(
      username: $username
      email: $email
      password: $password
      fullname: $fullname
    ) {
      token
    }
  }
`;

// EDIT USER
export const EDIT_USER = gql`
  mutation(
    $id: ID!
    $fullname: String
    $bio: String
    $profileImage: String
    $skills: [String!]
    $location: String
  ) {
    editUser(
      id: $id
      fullname: $fullname
      bio: $bio
      profileImage: $profileImage
      skills: $skills
      location: $location
    ) {
      id
    }
  }
`;

// DELETE USER
export const DELETE_USER = gql`
  mutation($id: ID!) {
    deleteUser(id: $id) {
      id
    }
  }
`;
