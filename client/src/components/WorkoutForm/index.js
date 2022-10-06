<<<<<<< HEAD
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_WORKOUT } from "../../utils/mutations";
import { QUERY_WORKOUTS, QUERY_ME } from "../../utils/queries";

const WorkoutForm = () => {
  const [workoutText, setText] = useState("");
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
      const { workouts } = cache.readQuery({
        query: QUERY_WORKOUTS,
      });
      console.log(workouts);
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
        variables: { workoutText },
      });

      // clear form value
      setText("");
      // setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      {/* <p>
            Character Count: {characterCount}/280
            {error && <span className="ml-2">Something went wrong...</span>}
        </p> */}
      <form>
        <textarea
          placeholder="Enter a workout..."
          value={workoutText}
          className="form-input  "
          onChange={handleChange}
=======
import React, { useState } from 'react';

const WorkoutForm = () => {
  return (
    <div>
      <p className="m-0">
        Character Count: 0/280
      </p>
      <form className="flex-row justify-center justify-space-between-md align-stretch">
        <textarea
          placeholder="Here's a new thought..."
          className="form-input col-12 col-md-9"
>>>>>>> parent of 7d233fc (form showing up but workoutList still not working)
        ></textarea>
        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default WorkoutForm;
