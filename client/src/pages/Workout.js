import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_WORKOUT } from "../utils/queries";

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
    <div className="single-workout">
      <div>
        <p className="sw-header">
          <span>{workout.username}</span> created this workout on
          {workout.createdAt}
        </p>
      </div>
      <div className="sw-body">
        <p>{workout.workoutText}</p>
      </div>
    </div>
  );
};

export default SingleWorkout;
