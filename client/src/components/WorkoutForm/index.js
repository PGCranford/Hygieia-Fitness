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
        event.preventDefault();

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


        return (
        <div  className={styles["workout-form"]}>
            <form
              onSubmit={handleFormSubmit}>
                       <h3 className={styles["workout-title"]}> New Workout Form</h3>            
            <div>
                <label   className={styles["workout-rounds"]}> How Many Rounds? </label>
                <input className={styles["workout-input"]}
                    placeholder='rounds'
                    type="number"
                    value={workoutRounds}
                    onChange={(e) =>
                        setRounds(parseInt(e.currentTarget.value, 10))
                    }
                >
                </input>
                <div className={styles["workout-buttons"]}>
                <button className={styles["rounds-button"]} onClick={(event) => {
                    setCommittedExercises(workoutRounds);
                    event.preventDefault();
                }} >Add Rounds</button>

                {[...Array(committedExercises)].map(
                    (value: undefined, index: number) => (
                        <Round id={index + 1} key={index}/>
                        )
                        )}
                <button className={styles["workout-add"]} type="submit">
                    Add Workout</button>
                    </div>
            </div>
            </form>
        </div >
        ) 
};


// const newWorkout extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {value: 'coconut'};
    
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//       }
//       handleChange(event) {
//         this.setState({value: event.target.value});
//       }

//       render()
//       return(
//         <form onSubmit={this.handleSubmit}>
//         <div className="select">
//                         <h3 className={styles["workout-prompt"]}>Would you like to add a new workout</h3>
//              <div className="select"  value={this.state.value} onChange={this.handleChange}>
//                     <select className={styles["workout-select"]}>
//                         <option value="yes" id="yes">YES</option>
//                         <option value="no" id="no">NO</option>
//                     </select>
//              </div>
//          </div>
//          </form>

//       )



//     if(selectId.value=yes)
//     return (
//         <div>
//         <label   className={styles["workout-rounds"]}> How Many Rounds? </label>
//         <input className={styles["workout-input"]}
//             placeholder='rounds'
//             type="number"
//             value={workoutRounds}
//             onChange={(e) =>
//                 setRounds(parseInt(e.currentTarget.value, 10))
//             }
//         >
//         </input>
//         <div className={styles["workout-buttons"]}>
//         <button className={styles["rounds-button"]} onClick={(event) => {
//             setCommittedExercises(workoutRounds);
//             event.preventDefault();
//         }} >Add Rounds</button>

//         {[...Array(committedExercises)].map(
//             (value: undefined, index: number) => (
//                 <Round id={index + 1} key={index}/>
//                 )
//                 )}
//         <button className={styles["workout-add"]} type="submit">
//             Add Workout</button>
//             </div>
//     </div>
//     )


// };

const Round =  ({ id }: { id: number}) => {
   
    const [characterCount, setCharacterCount] = useState('');
    // submit form

    const [workoutReps,  setWorkoutReps] = useState('');
    const [workoutText, setWorkoutText]= useState('');
    const [ workoutName, setWorkoutName] = useState('');
    

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
        <label  className={styles["workout-round"]} htmlFor={`round${id}`}>Round  {id}</label>
        {/* <input id={`round${id}`} type="text"/> */}
        <form>
        <input className="column"
                            type="text"    
                        placeholder='Workout Name'
                        id ={workoutName}
                        value= {workoutName}
                    
                        className={styles["workout-text"]}
                        onChange={ (event) => setWorkoutName(event.target.value)}
                    ></input>

            <input className="column"
                        type="text"
                        placeholder='Reps'
                        id={workoutReps}
                        className={styles["workout-reps"]}
                        onChange={ (event) => setWorkoutReps(event.target.value)}
                        value= {workoutReps}
                    >
                    </input>
                    <input className="column"
                            type="text"    
                        placeholder='Exercise'
                        id ={workoutText}
                    
                        className={styles["workout-text"]}
                        onChange={ (event) => setWorkoutText(event.target.value)}
                        value= {workoutText}
                    ></input>
            </form>
    </div> 
    )
    
 }

export default WorkoutForm;
