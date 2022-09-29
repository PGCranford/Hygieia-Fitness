// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

type Workout {
    _id: ID
    workoutText: String
    workoutReps: INT
    workoutRounds: INT
    username: String
    comments: [Comment]
}


`