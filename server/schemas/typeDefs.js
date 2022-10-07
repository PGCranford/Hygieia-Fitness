// import the gql tagged template function
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    workouts: [Workout]
  }

  type Workout {
    _id: ID
    workoutText: String
    createdAt: String
    username: String
    commentCount: Int
    comments: [Comment]
  }

  type Comment {
    _id: ID
    commentBody: String
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
    workouts(username: String): [Workout]
    workout(_id: ID!): Workout
  }

  type Comment {
    _id: ID
    commentBody: String
    createdAt: String
    username: String
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addWorkout(workoutText: String!): Workout
    addComment(commentId: ID!, commentBody: String!): Workout
  }
`;

module.exports = typeDefs;
