import { gql } from "apollo-boost";

export const shotFragments = {
  shot: gql`
    fragment CompleteShot on Shot {
      _id
      name
      image
      largeImage
      description
      createDate
      likes
      username
      fullname
    }
  `,
  like: gql`
    fragment LikeShot on Shot {
      _id
      likes
    }
  `
};
