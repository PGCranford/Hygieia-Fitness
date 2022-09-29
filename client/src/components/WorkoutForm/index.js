import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./style.module.css";

const WorkoutList = ({ workouts, title }) => {
    if (!workouts.length) {
        return <h3>No Workouts Yet</h3>
    }

    return (
        <div>
            <h2>{title}</h2>
            {workouts &&
                workouts.map(workout => (
                    <div key={(workout.id)} className={styles["workout-form"]} class="columns">
                        <p className={styles["workout-header"]}>
                            <Link
                                to={`/profile/${workout.username}`}
                                className={styles["workout-user"]}
                            >
                                {workout.username}
                            </Link>{''}
                        </p>
                        <div className={styles["workout-card"]}>
                            <div class="column">
                                Reps
                            </div>
                            <div class="column is-two-fifths">
                                Exercise
                            </div>
                            <div class="column">
                                Rounds
                            </div>
                            <div className={styles["comment-section"]}>
                                <Link to={`/workout/${workout._id}}`}>
                                    //LINK TO COMMENTS
                                </Link>{''}
                                commented on{comment.createdAt}
                            </div>
                        </div>
                    </div>
                ))}
        </div>
};

export default WorkoutList;