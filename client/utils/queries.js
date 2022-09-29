import { gql } from '@apollo/client';

export const QUERY_WORKOUTS = gql`
    query workouts($username: String){
        workouts(username: $username){
            _id
            workoutText
            workoutReps
            workoutRounds
            createdAt
            username
            commentCount
            comments{
                _id
                createdAt
                username
                commentBody
            }
        }
    }
`;

export const QUERY_WORKOUT = gql`
    query workout($id: ID!){
        workouts(_id: $id){
            _id
            workoutText
            workoutReps
            workoutRounds
            createdAt
            username
            commentCount
            comments{
                _id
                createdAt
                username
                commentBody
            }
        }
    }
`;

