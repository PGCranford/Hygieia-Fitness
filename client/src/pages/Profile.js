import {useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import WorkoutList from '../components/WorkoutList';
// import { QUERY_WORKOUTS} from '../utils/queries';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import WorkoutForm from '../components/WorkoutForm';


const Profile = () => {
  
  const { username: userParam } = useParams();
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam }
  });

  const user = data?.me || data?.user || {};

    // navigate to personal profile page if username is the logged-in user's
    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
      return "/profile:username";
    }

    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (!user?.username) {
      return (
        <h4>
          You need to be logged in to see this page. Use the navigation links above to sign up or log in!
        </h4>
      );
    }

  return (
    <div>
      <div>
        <h2 className='title'>
          Viewing {userParam ? `${user.username}'s` : 'your'} profile.
        </h2>
      </div>

      <div>
        <div>
          <WorkoutList 
            workouts={user.workouts} 
            title={`${user.username}'s workouts...`} 
          />
        </div>
      </div>
      <div className="mb-3">{!userParam && <WorkoutForm />}</div>
    </div>
  );
};

export default Profile;
