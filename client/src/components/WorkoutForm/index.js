import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_WORKOUT } from "../../utils/mutations";
import { QUERY_WORKOUTS, QUERY_ME } from "../../utils/queries";
import styles from "./style.module.css";

const WorkoutForm = () => {
  const [workoutText, setText] = useState("");
  const [workoutTitle, setTitle] = useState("");
  // const [characterCount, setCharacterCount] = useState(0);

  //use mutation hook that allows us to update the cache of any related queries
  const [addWorkout] = useMutation(ADD_WORKOUT, {
    update(cache, { data: { addWorkout } }) {
      // could potentially not exist yet, so wrap in a try/catch
      try {
        // update me array's cache
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, workouts: [...me.workouts, addWorkout] } },
        });
      } catch (e) {
        console.warn("First workout added by user!");
      }

      // update workout array's cache
      const { workouts } = cache.readQuery({ query: QUERY_WORKOUTS });
      cache.writeQuery({
        query: QUERY_WORKOUTS,
        data: { workouts: [addWorkout, ...workouts] },
      });
    },
  });

  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setText(event.target.value);
      // setCharacterCount(event.target.value.length);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // add thought to database
      await addWorkout({
        variables: { workoutText, workoutTitle },
      });

      // clear form value
      setText("");
      setTitle("");
      // setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={styles["new-workout"]}>
      <div className={styles["workout-title"]}>Add a new workout</div>
      {/* <p>
            Character Count: {characterCount}/280
            {error && <span className="ml-2">Something went wrong...</span>}
        </p> */}
      <form className={styles["form"]}>
        <textarea
          className={styles["form-title"]}
          placeholder="Enter a title..."
          value={workoutTitle}
        ></textarea>
        <textarea
          className={styles["form-input"]}
          placeholder="Enter a workout..."
          value={workoutText}
        ></textarea>
        <button
          className={styles["btn-submit"]}
          type="submit"
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default WorkoutForm;
