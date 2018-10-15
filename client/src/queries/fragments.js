import { gql } from "apollo-boost";

export const shotFragments = {
  shot: gql`
    fragment CompleteShot on Shot {
      _id
      name
      imageUrl
      description
      createDate
      likes
      username
    }
  `,
  like: gql`
    fragment LikeShot on Shot {
      _id
      likes
    }
  `
};
