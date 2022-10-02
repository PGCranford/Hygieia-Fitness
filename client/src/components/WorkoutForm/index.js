import React, { useState } from 'react';
import styles from "./style.module.css";

import { useMutation } from '@apollo/client';
import { ADD_WORKOUT } from '../../utils/mutations';
import { QUERY_WORKOUTS,  QUERY_ME} from '../../utils/queries';


const WorkoutForm = () => {
    const [setText, setCharacterCount, workoutReps, workoutText
    ] = useState('');

    const [workoutRounds, setRounds] = React.useState(1);
    const [committedExercises, setCommittedExercises] = React.useState(0);



    
    const [addWorkout, { error }] = useMutation(ADD_WORKOUT, {
        update(cache, { data: { addWorkout } }) {
            
            // could potentially not exist yet, so wrap in a try/catch
            try {
                // update me array's cache
                const { me } = cache.readQuery({ query: QUERY_ME});
                cache.writeQuery({
                    query: QUERY_ME,
                    data: { me: { ...me, workouts: [...me.workouts, addWorkout] } },
                });
            } catch (e) {
                console.warn("First workout insertion by user!")
            }
            
            // update workout array's cache
            const { workouts } = cache.readQuery({ query: QUERY_WORKOUTS });
            cache.writeQuery({
                query: QUERY_WORKOUTS,
                data: { workouts: [addWorkout, ...workouts] },
            });
        }
    });
        const handleFormSubmit = async (event) => {
        // event.preventDefault();

        try {
            await addWorkout({
                variables: { workoutText, workoutReps},
            });

            // clear form value
            setText('');
            setCharacterCount(0);
        } catch (e) {
            console.error(e);
        }
    };

    const newWorkout = () => {
        
            <h3> Would you like to add a new workout</h3>
        <div>
            <select>
                 <option value="yes"> Yes</option>
                <option value="no"> No</option>
            </select>   
        </div>
        if(selectId.value==='yes') 
        
  
        return (
        <div>
            <form class="columns" className={styles["workout-form"]}
              onSubmit={handleFormSubmit}>
                <label> How Many Rounds? </label>
                <input class="column"
                    placeholder='rounds'
                    type="number"
                    value={workoutRounds}
                    className={styles["workout-rounds"]}
                    onChange={(e) =>
                        setRounds(parseInt(e.currentTarget.value, 10))
                    }
                >
                </input>
                <button onClick={(event) => {
                    setCommittedExercises(workoutRounds);
                    event.preventDefault();
                }} >Add Rounds</button>

                {[...Array(committedExercises)].map(
                    (value: undefined, index: number) => (
                        <Round id={index + 1} key={index}/>
                        )
                        )}
                <button className="workout-add" type="submit">
                    Add Workout</button>
            </form>
        </div >
    )}
};


const Round =  ({ id }: { id: number}) => {
   
    const [characterCount, setCharacterCount] = useState();
    // submit form

    const [workoutReps, workoutText,  setText] = useState('');
    

      // update state based on form input changes
    //   const handleChange = (event) => {
    //     if (event.target.value.length <= 280) {
    //         setText(event.target.value);
    //         setCharacterCount(event.target.value.length);
    //     }
    // };

    return (

    <div>
          {/* <p
                    className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}
                >
                    Character Count: {characterCount}/280
                    {error && <span className="ml-2">Something went wrong...</span>}
                </p> */}
        <label htmlFor={`round${id}`}>Round{id}</label>
        {/* <input id={`round${id}`} type="text"/> */}
        <form>
            <input class="column"
                        type="text"
                        placeholder='Reps'
                        id={workoutReps}
                        className={styles["workout-reps"]}
                        // onChange={workoutReps}
                    >
                    </input>
                    <input class="column"
                            type="text"    
                        placeholder='Exercise'
                        id ={workoutText}
                    
                        className={styles["workout-text"]}
                        // onChange={workoutText}
                    ></input>
            </form>
    </div> 
    )
    
 }

export default WorkoutForm;
