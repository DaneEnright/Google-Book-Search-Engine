import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $bookCount: Integer!) {
    addUser(username: $username, email: $email, bookCount: $bookCount) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($profileId: ID!, $skill: String!) {
    saveBook(profileId: $profileId, skill: $skill) {
      _id
      name **
      
    }
  }
`;



export const REMOVE_BOOK = gql`
  mutation removeBook($skill: String!) { **
    removeBook(skill: $skill) {
      _id
      name
      skills
    }
  }
`;