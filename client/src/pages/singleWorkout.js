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
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {workout.username}
          </span>{" "}
          workout was {workout.createdAt}
        </p>
        <div className="card-body">
          <p>{workout.workoutText}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleWorkout;
