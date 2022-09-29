import { gql } from '@apollo/client';

export const ADD_WORKOUT = gql`
  mutation addWorkout($workoutText: String!) {
    addThought(workoutText: $thoughtText) {
      _id
      workoutText
      workoutReps
      workoutRounds
      createdAt
      username
      reactionCount
      reactions {
        _id
      }
    }
  }
`;