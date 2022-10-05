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
            }
        }
    }
`;

export const QUERY_ME_BASIC = gql`
    {
        me {
            _id
            username
            email
        }
    }
`;
