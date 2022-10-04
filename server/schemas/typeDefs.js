// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }

  type Workout {
    _id: ID
    workoutText: String
    username: String
    # comments: [Comment]
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
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addWorkout(workoutText: String!): Workout
  }
`;

module.exports = typeDefs;
