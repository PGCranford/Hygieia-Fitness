import React, { useState } from 'react';
import styles from "./style.module.css";

import { useMutation } from '@apollo/client';
import { ADD_WORKOUT } from '../../utils/mutations';
import { QUERY_WORKOUTS,  QUERY_ME} from '../../utils/queries';


const WorkoutForm = () => {
    const [workoutText, setText] = useState('');

  
    const [workoutRounds, setRounds] = React.useState(1);
    const [committedExercises, setcommittedExercises] = React.useState(0);
    const [characterCount, setCharacterCount] = useState();

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
                data: { thoughts: [addWorkout, ...workouts] },
            });
        }
    });

    // // update state based on form input changes
    // const handleChange = (event) => {
    //     if (event.target.value.length <= 280) {
    //         setText(event.target.value);
    //         setCharacterCount(event.target.value.length);
    //     }
    // };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            await addWorkout({
                variables: { workoutText },
            });

            // clear form value
            setText('');
            setCharacterCount(0);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div>
            <form class="columns" className={styles["workout-form"]}
                onSubmit={handleFormSubmit}
            >
                <p
                    className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}
                >
                    Character Count: {characterCount}/280
                    {error && <span className="ml-2">Something went wrong...</span>}
                </p>
                <label> How Many Rounds? </label>
                <input class="column"
                    placeholder='rounds'
                    value={workoutRounds}
                    className={styles["workout-rounds"]}
                    onChange={(e) =>
                        setRounds(parseInt(e.currentTarget.value, 10))
                    }
                >
                </input>
                <button onClick={() => {
                    setcommittedExercises(workoutRounds);
                }} >Add Rounds</button>

                {/* {[...Array(committedExercises)].map(
                    (value: undefined, index: number) => (
                        <Round id={index + 1} key={index}/>
                    )
                )} */}
                

            </form>
        </div >
    )
    
    
};


;
// const Round = ({ id }: { id: number}) => (
//     const [workoutReps, workoutText, setReps, setText] = useState('');
    
//     <div>
//     <label htmlfor={`WorkoutRounds${id}`}>Round{id}</label>
//     <input id={`WorkoutRounds${id}`} type="text"/>
        
//     <textarea class="column"
//                         placeholder='reps'
//                         value={workoutReps}
//                         className={styles["workout-reps"]}
//                         onChange={(e) =>
//                             setReps(parseInt(e.currentTarget.value, 10))
//                         }
//                     >
//                     </textarea>
//                     <textarea class="column"
//                         placeholder='Exercise'
//                         value={workoutText}
//                         className={styles["workout-text"]}
//                         onChange={(e) =>
//                             setText(parseInt(e.currentTarget.value, 10))
//                         }
//                     ></textarea>

// </div>
// )
export default WorkoutForm;
