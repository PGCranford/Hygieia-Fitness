import React, { useState } from "react";
import styles from "./style.module.css";

import { useMutation } from "@apollo/client";
import { ADD_WORKOUT } from "../../utils/mutations";
import { QUERY_WORKOUTS, QUERY_ME } from "../../utils/queries";

const WorkoutForm = () => {
  const [workoutText, setWorkoutText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const [addWorkout, { error }] = useMutation(ADD_WORKOUT, {
    update(cache, { data: { addWorkout } }) {
      ///checking for existence of workout
      try {
        // update array's cache
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, workouts: [...me.workouts, addWorkout] } },
        });
      } catch (e) {
        console.warn("First workout insertion by user!");
      }

      // update workout array's cache
      const { workouts } = cache.readQuery({ query: QUERY_WORKOUTS });
      cache.writeQuery({
        query: QUERY_WORKOUTS,
        data: { workouts: [addWorkout, ...workouts] },
      });
    },
  });

  // update state based on form input changes
  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setWorkoutText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addWorkout({
        variables: { workoutText },
      });

      // clear form value
      setWorkoutText("");
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={styles["workout-form"]}>
      <p
        className={`m-0 ${characterCount === 540 || error ? "text-error" : ""}`}
      >
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form onSubmit={handleFormSubmit}>
        <h3 className={styles["workout-title"]}> New Workout Form</h3>
        <div>
          <textarea
            placeholder="The workout I did today..."
            value={workoutText}
            className="form-input col-12 col-md-9"
            onChange={handleChange}
          ></textarea>
          <button className="btn col-12 col-md-3" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default WorkoutForm;
