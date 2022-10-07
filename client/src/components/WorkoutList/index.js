import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

const WorkoutList = ({ workouts, title }) => {
  if (!workouts.length) {
    return <h3>No Workouts Yet</h3>;
  }

  return (
    <div className={styles["workout"]}>
      <h3 className={styles["workout-title"]}>{title}</h3>
      {workouts &&
        workouts.map((workout) => (
          <div key={workout._id}>
            <p className={styles["workout-info"]}>
              <div>
                <Link to={`/workout/${workout._id}`}>
                  <p>{workout.workoutTitle}</p>
                </Link>
              </div>
              <Link
                to={`/profile/${workout.username}`}
                style={{ fontWeight: 600 }}
              >
                {workout.username}
              </Link>{" "}
              on {workout.createdAt}
            </p>
          </div>
        ))}
    </div>
  );
};

export default WorkoutList;
