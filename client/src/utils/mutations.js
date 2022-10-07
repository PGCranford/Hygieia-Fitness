import { gql } from '@apollo/client';

//login mutation
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

//signup mutation
export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

//add a workout
export const ADD_WORKOUT = gql`
  mutation addWorkout($workoutText: String!) {
    addWorkout(workoutText: $workoutText) {
      _id
      workoutText
      createdAt
      username
    }
  }
`;

//add a comment
export const ADD_CCOMMENT = gql`
  mutation addComment($commentId: ID!, $commentBody: String!) {
    addComment(commentId: $tcommentId, commentBody: $commentBody) {
      _id
      commentCount
      comments {
        _id
        comentBody
        createdAt
        username
      }
    }
  }
`;
