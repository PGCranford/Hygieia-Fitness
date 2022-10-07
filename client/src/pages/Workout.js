import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_WORKOUT } from "../utils/queries";
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';
import Auth from '../utils/auth';

const SingleWorkout = (props) => {
  const { id: workoutId } = useParams();

  const { loading, data } = useQuery(QUERY_WORKOUT, {
    variables: { id: workoutId },
  });

  const workout = data?.workout || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="single-workout"
      style={{ "height": "74vh" }}>
      <div>
        <p className="sw-header">
          <span>{workout.username}</span> created this workout on
          {workout.createdAt}
        </p>
      </div>
      <div className="sw-body">
        <p>{workout.workoutText}</p>
      </div>
      {workout.commentCount > 0 && <CommentList comments={workout.comments} />}
      {Auth.loggedIn() && <CommentForm workoutId={workout._id} />}
    </div>
  );
};

export default SingleWorkout;
