// import the gql tagged template function
const { gql } = require("apollo-server-express");

<<<<<<< HEAD
// create our typeDefs
=======

>>>>>>> develop
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
<<<<<<< HEAD
    username: String
    createdAt: String
    # comments: [Comment]
=======
    createdAt: String
    username: String
>>>>>>> develop
  }

  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
    users: [User]
    user(username: String!): User
<<<<<<< HEAD
    workouts: [Workout]
=======
    workouts(username: String): [Workout]
>>>>>>> develop
    workout(_id: ID!): Workout
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addWorkout(workoutText: String!): Workout
  }
`;

module.exports = typeDefs;
