const { gql } = require('apollo-server-express');

//check verbiage for workouts

//deleted Type Thought (workout) and type Reaction (comment) so that Patrick and Austin could add them for their parts. 
//They were after the type User definition
//check lines under type Query {me: user} to make sure the verbiage for comments is correct
//check verbiage for Workout and comments in the type Mutation to make sure correct
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }


  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;