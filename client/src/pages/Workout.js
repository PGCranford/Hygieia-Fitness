import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_WORKOUT } from '../utils/queries';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';
import Auth from '../utils/auth';


const SingleWorkout = props => {
    const { id: workoutId } = useParams();
  
    const { loading, data } = useQuery(QUERY_WORKOUT, {
      variables: { id: workoutId }
    });
  
    const workout = data?.workout || {};
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    return (
        <div>
            <div className="card mb-3">
              <p className="card-header">
                  <span style={{ fontWeight: 700 }} className="text-light">
                  {workout.username}
                  </span>{' '}
                  workout was {workout.createdAt}
              </p>
              <div className="card-body">
                  <p>{workout.workoutText}</p>
              </div>
            </div>
            {workout.commentCount > 0 && <CommentList comments={workout.comments} />}
            {Auth.loggedIn() && <CommentForm workoutId={workout._id} />}
        </div>
    );
  };
  
  export default SingleWorkout;
