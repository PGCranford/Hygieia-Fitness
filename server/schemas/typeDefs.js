
// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

type Workout {
    _id: ID
    workoutText: String
    workoutReps: Int
    workoutRounds: Int
    username: String
    # comments: [Comment]
}

`;

module.exports = typeDefs;
