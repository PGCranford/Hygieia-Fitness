import {useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import WorkoutList from '../components/WorkoutList';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
// import Auth from '../utils/auth';


const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER: QUERY_ME, {
    variables: { username: userParam }
  });

  const user = data?.ME || data?.user || {};

  // navigate to personal profile page if username is the logged-in user's
  // if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
  //   return <Navigate to="/profile" />;
  // }

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
      <div className="flex-row mb-3">
        <h2 className="bg-dark text-secondary p-3 display-inline-block">
          Viewing {userParam ? `${user.username}'s` : 'your'} profile.
        </h2>
      </div>

      <div className="flex-row justify-space-between mb-3">
        <div className="col-12 mb-3 col-lg-8">
          <WorkoutList workouts={user.workouts} title={`${user.username}'s workouts...`} />
        </div>
      </div>
    </div>
  );
};

export default Profile;

// const Profile = () => {
//     // use useQuery hook to make query request
//     const { loading, data } = useQuery(QUERY_WORKOUTS);

//     //every query data comes in a big data object, so we need to extract the data out of the query's response
//     const workouts = data?.workouts || [];
//     console.log(workouts);
  
//     return (
//       <section>
//         <div className="">
//             <div className="">
//             {loading ? (
//                 <div>Loading...</div>
//             ) : (
//                 <WorkoutList workouts={workouts} title="Crush it!" />
//             )}
//             </div>
//         </div>
//       </section>
//     );
// };