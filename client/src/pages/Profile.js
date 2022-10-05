import React from "react";
import { useParams } from "react-router-dom";
import WorkoutList from "../components/WorkoutList";
import WorkoutForm from "../components/WorkoutForm";

import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_WORKOUTS, QUERY_ME_BASIC } from "../utils/queries";

const Profile = () => {
  const { username: userParam } = useParams();
  const { loading, data } = useQuery(QUERY_WORKOUTS);
  // below is for comments/friends
  const { data: userData } = useQuery(QUERY_ME_BASIC);

  const user = data?.me || data?.user || {};
  const workouts = data?.workouts || {};
  const loggedIn = Auth.loggedIn();

  return (
    <div>
      <div className="profile">
        {loggedIn && (
          <div className="new-workout">
            <WorkoutForm />
          </div>
        )}
        <div className={`"profile-workouts" ${loggedIn}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div className="profile-workouts">
              <WorkoutList
                workouts={workouts}
                title="Workout's you have worked out`"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
