import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_WORKOUT } from '../../utils/mutations';
import { QUERY_WORKOUTS, QUERY_ME } from '../../utils/queries';

const WorkoutForm = () => {

  const [workoutText, setText] = useState('');
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
          console.warn("First workout added by user!")
        }
    
        // update workout array's cache
        const { workouts } = cache.readQuery({ query: QUERY_WORKOUTS });
        cache.writeQuery({
          query: QUERY_WORKOUTS,
          data: { workouts: [addWorkout, ...workouts] },
        });
      }
  });

  const handleChange = event => {
      if (event.target.value.length <= 280) {
          setText(event.target.value);
          // setCharacterCount(event.target.value.length);
      }
  };

  const handleFormSubmit = async event => {
      event.preventDefault();
    
      try {
        // add thought to database
        await addWorkout({
          variables: { workoutText }
        });
    
        // clear form value
        setText('');
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
      <form className='profile'
        style={{ "height": "80vh" }}>
        <textarea
          placeholder="Enter a workout..."
          value={workoutText}
          className="form-input col-10 col-md-4"
          onChange={handleChange}
        ></textarea>
        <button className='btn' type="submit" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default WorkoutForm;
