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
                    <div key={(workout.id)}  >
                        <p >
                            <Link
                                to={`/profile/${workout.username}`}
                                className={styles["workout-user"]}
                            >
                                {workout.username}
                            </Link>{''}
                        </p>
                        <div> 
                            <Link
                            to={`profile/${workout.workoutRounds}`}
                            >
                            </Link>
                        </div >
                            <div>
                                <Link
                                    to={`/profile/${workout.workoutReps}`}
                                >
                                    {workout.workoutReps}
                                </Link>
                            </div>
                            <div >
                                <Link
                                    to={`/profile/${workout.workoutText}`}
                                >
                                    {workout.workoutText}
                                </Link>

                            </div>
                            <div >
                                <Link
                                    to={`/profile/${workout.workoutRounds}`}
                                >
                                    {workout.workoutRounds}
                                </Link>
                            </div>
                            <div className={styles["comment-section"]}>
                                <Link to={`/workout/${workout._id}}`}>
                                    [//LINK TO COMMENTS]
                                </Link>{''}
                                commented on{comment.createdAt}
                            </div>
                        </div>
                    
                ))}
        </div>
    );
};

export default WorkoutList;