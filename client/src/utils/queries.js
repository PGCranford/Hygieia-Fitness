import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
    workouts {
      _id
      workoutText
      createdAt
    }
  }
`;

export const QUERY_WORKOUTS = gql`
  query workouts($username: String) {
    workouts(username: $username) {
      _id
      workoutText
      createdAt
      username
      commentCount
      comments {
        _id
        createdAt
        username
        commentBody
      }
    }
  }
`;

export const QUERY_WORKOUT = gql`
  query workout($id: ID!) {
    workout(_id: $id) {
      _id
      workoutText
      createdAt
      username
      commentCount
      comments {
        _id
        createdAt
        username
        commentBody
      }
    }
  }
`;
export const QUERY_COMMENTS = gql`
  query comments($username: String) {
    comments(username: $username) {
      _id
      thoughtText
      createdAt
      username
      comments {
        _id
        createdAt
        username
        commentBody
      }
    }
  }
`;


export const QUERY_COMMENT = gql`
  query comment($id: ID!) {
    comment(_id: $id) {
      _id
      commentText
      createdAt
      username
      comments {
        _id
        createdAt
        username
        commentBody
      }
    }
  }
`;


export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      workouts {
        _id
        workoutText
        createdAt
        commentCount
        comments {
          _id
          createdAt
          commentBody
          username
        }
      }
    }
  }
`;