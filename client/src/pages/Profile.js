//make sure that authorization is added for when logged in

import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

import WorkoutForm from '../components/WorkoutForm';
import WorkoutList from '../components/WorkoutList'

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER, QUERY_ME} from '../utils/queries'
import {ADD_WORKOUT} from '../utils/mutations'

import Auth from '../utils/auth'

const Profile =(props) => { 
    const {username: userParam } = useParams();

    const {loading, data} = useQuery(userParam ? QUERY_USER: QUERY_ME, {
        variables: {username: userParam},
    });

    const user = data?.me || data?.user || {};
    const workouts=data?.workouts

  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/profile:username" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return(
    <div>
        <div className="profile">
            <h2 className ="profile-user">
                Viewing {`${user.username}'s`} profile.
                </h2>
            </div>
          <div className="new-workout">
            {!userParam && <WorkoutForm/>} 
          </div>

          <div className="profile-workout">
            <WorkoutList 
            workouts={workouts}
            title={`${user.username}'s workouts...`}
            />
          </div>
          <div class="box">
            I'm going to be workouts
            </div>
    </div>
  )


}


export default Profile;


