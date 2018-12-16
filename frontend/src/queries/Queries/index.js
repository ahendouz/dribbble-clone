import { gql } from "apollo-boost";

export const SHOTS = gql`
  query {
    shots(orderBy: createdAt_DESC) {
      id
      title
      description
      image
      createdAt
      likes
      postedBy {
        id
        fullname
        profileImage
        username
      }
      comments {
        comment
      }
    }
  }
`;

export const SHOT = gql`
  query($id: ID!) {
    shot(where: { id: $id }) {
      id
      title
      description
      largeImage
      likes
      tags
      colors
      postedBy {
        id
        fullname
        profileImage
        shots {
          id
          image
          title
        }
      }
      comments {
        id
        comment
        commentedBy {
          id
          fullname
          profileImage
        }
      }
      createdAt
    }
  }
`;

export const GET_CURRENT_USER = gql`
  query {
    getCurrentUser {
      id
      username
      profileImage
      fullname
    }
  }
`;

export const USER = gql`
  query($id: ID!) {
    user(where: { id: $id }) {
      id
      fullname
      username
      profileImage
      bio
      location
      favorites {
        shot {
          id
          image
          title
          description
          createdAt
          likes
          postedBy {
            id
            fullname
            profileImage
          }
          comments {
            comment
          }
        }
      }
      shots {
        id
        image
        title
        description
        createdAt
        likes
        comments {
          comment
        }
      }
    }
  }
`;
