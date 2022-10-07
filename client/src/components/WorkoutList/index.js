import React from "react";
import { Link } from "react-router-dom";

const WorkoutList = ({ workouts, title }) => {
  if (!workouts.length) {
    return <h3>No Workouts Yet</h3>;
  }

  return (
    <div className="workout">
      <h3>{title}</h3>
      {workouts &&
        workouts.map((workout) => (
          <div key={workout._id}>
            <p>
              <div>
                <Link to={`/workout/${workout._id}`}>
                  <p>{workout.workoutText}</p>
                </Link>
              </div>
              <Link
                to={`/profile/${workout.username}`}
                style={{ fontWeight: 700 }}
              >
                {workout.username}
              </Link>{" "}
              Workout on {workout.createdAt}
            </p>
          </div>
        ))}
    </div>
  );
};

export default WorkoutList;
