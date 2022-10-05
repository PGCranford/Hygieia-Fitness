const { gql } = require('apollo-server-express');


const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    comment: [Comment]
    workouts: [Workout]
  }

  type Workout {
    _id: ID
    workoutText: String
    createdAt: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    comment(username: String): [Comment]
  }

  type Comment {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
    workouts(username: String): [Workout]
    workout(_id: ID!): Workout
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addComment(commentId: ID!, commentBody: String!): Comment
    addWorkout(workoutText: String!): Workout
  }
`;

module.exports = typeDefs;