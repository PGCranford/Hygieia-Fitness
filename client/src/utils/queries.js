import { gql } from '@apollo/client';

// export const QUERY_USER = gql`
//   query user($username: String!) {
//     user(username: $username) {
//       _id
//       username
//       email
//   }
// `;

export const QUERY_WORKOUTS = gql`
    query workouts($username: String) {
        workouts(username: $username) {
            _id
            workoutText
            createdAt
            username
            reactionCount
            reactions {
                _id
                createdAt
                username
                reactionBody
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

export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            _id
            username
            email
            friendCount
            friends {
                _id
                username
            }
            workouts {
                _id
                workoutText
                createdAt
                commentCount
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
            friendCount
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
            friends {
                _id
                username
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
            friendCount
            friends {
                _id
                username
            }
        }
    }
`;
