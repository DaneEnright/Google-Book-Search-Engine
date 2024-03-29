import { gql } from '@apollo/client';

export const QUERY_GET_ME = gql`
  query User {
    me {
      _id
      username
      email
      savedBooks{
          bookId
          authors
          description
          title
          image
          link
      }
    }
  }
`;

// export const QUERY_SINGLE_PROFILE = gql`
//   query singleProfile($profileId: ID!) {
//     profile(profileId: $profileId) {
//       _id
//       name
//       skills
//     }
//   }
// `;

// export const QUERY_ME = gql`
//   query me {
//     me {
//       _id
//       name
//       skills
//     }
//   }
// `;