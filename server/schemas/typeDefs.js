const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Integer
    savedBooks: [Book]
  }

  type Book {
      bookId: ID
      authors: [Author]
      description: String
      title: String
      image:
      link:
  }

  type Auth {
      token: ID!
      user: User
  }

  type Query {
    me: [User]!
    me(User_Id: ID!): User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, bookCount: Integer!): Auth
    saveBook(profileId: ID!): Profile **
    removeBook: Book
  }
`;

module.exports = typeDefs;