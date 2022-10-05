import React, { useState, useEffect } from "react";
import styles from "./style.module.css";

import { useMutation, useQuery } from "@apollo/client";

import { ADD_WORKOUT } from "../../utils/mutations";
import { QUERY_WORKOUTS, QUERY_ME } from "../../utils/queries";

const WorkoutForm = () => {
  const [workoutText, setWorkoutText] = useState("");
  const [currentWorkout, setCurrentWorkout] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const [addWorkout, { error }] = useMutation(ADD_WORKOUT, {
    // update(cache, { data: { addWorkout } }) {
    //   ///checking for existence of workout
    //   try {
    //     // update array's cache
    //     const { me } = cache.readQuery({ query: QUERY_ME });
    //     cache.writeQuery({
    //       query: QUERY_ME,
    //       data: { me: { ...me, workouts: [...me.workouts, addWorkout] } },
    //     });
    //   } catch (e) {
    //     console.warn("First workout insertion by user!");
    //   }
    //   // update workout array's cache
    //   const { workouts } = cache.readQuery({ query: QUERY_WORKOUTS });
    //   cache.writeQuery({
    //     query: QUERY_WORKOUTS,
    //     data: { workouts: [addWorkout, ...workouts] },
    //   });
    // },
  });
  const { loading, data } = useQuery(QUERY_WORKOUTS);

  useEffect(() => {
    //do something with the data
    console.log(data);
  }, [data]);

  // update state based on form input changes
  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setWorkoutText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("Am I working?");

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
        Character Count: {characterCount}/540
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form onSubmit={handleFormSubmit}>
        <h3 className={styles["workout-title"]}> New Workout Form</h3>
        <div>
          <textarea
            className={styles["workout-input"]}
            placeholder="The workout I did today..."
            value={workoutText}
            onChange={handleChange}
          ></textarea>
          <button className="" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default WorkoutForm;
