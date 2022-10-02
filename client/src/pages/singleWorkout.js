import React from 'react';
import { useParams } from 'react-router-dom';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_WORKOUT } from '../utils/queries';


const SingleWorkout = (props) => {
    const { id: workoutid } = useParams();
  
    const { loading, data } = useQuery(QUERY_WORKOUT, {
      variables: { id: workoutid },
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
            thought on {workout.createdAt}
          </p>
          <div className="card-body">
            <p>{workout.thoughtText}</p>
          </div>
        </div>
  
        {/* {thought.reactionCount > 0 && (
          <ReactionList reactions={thought.reactions} />
        )}
  
        {Auth.loggedIn() && <ReactionForm thoughtId={thought._id} />} */}
      </div>
    );
  };
  
  export default SingleWorkout;