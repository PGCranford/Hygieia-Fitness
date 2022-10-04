import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

const WorkoutList = ({ workouts, title }) => {
  if (!workouts.length) {
    return <h3>No Workouts Yet</h3>;
  }

  return (
    <div>
      <h2>{title}</h2>
      {workouts &&
        workouts.map((workout) => (
          <div key={workout.id}>
            <p className={styles["workout-title"]}>
              <Link
                to={`/profile/${workout.username}`}
                className={styles["workout-user"]}
              >
                {workout.username}
              </Link>
              {""}
            </p>
            <div className="card-body">
              <Link to={`/workout/${workout._id}`}>
                <p>{workout.workoutText}</p>
              </Link>
            </div>
            {/* <div className={styles["comment-section"]}>
                                <Link to={`/workout/${workout._id}}`}>
                                    [//LINK TO COMMENTS]
                                </Link>{''}
                                commented on{comment.createdAt}
                            </div> */}
          </div>
        ))}
    </div>
  );
};

export default WorkoutList;
