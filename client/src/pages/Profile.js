import { useQuery } from "@apollo/client";
import WorkoutList from "../components/WorkoutList";
// import { QUERY_WORKOUTS} from '../utils/queries';
import { QUERY_WORKOUTS } from "../utils/queries";
import Auth from "../utils/auth";
import WorkoutForm from "../components/WorkoutForm";

const Profile = () => {
  // const { username: userParam } = useParams();
  const { loading, data } = useQuery(QUERY_WORKOUTS);
  // below is for comments/friends
  // const { data: userData } = useQuery(QUERY_ME_BASIC);

  const workouts = data?.workouts || {};
  const loggedIn = Auth.loggedIn();
  // const user = data?.me || data?.user || {};

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
              <WorkoutList workouts={workouts} title="s workouts...`" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
