import { useParams } from 'react-router-dom';
import { hooks as authedUserHook } from 'modules/Authentication/AuthedUser';

const Profile = () => {
  const { userId } = useParams();
  const { authedUser } = authedUserHook.useAuthedUser();
  return (
    <>
      {parseInt(userId, 10) === authedUser.userId ? <p>avtorizirebulis</p> : <p>sxvisi</p>}
    </>
  );
};

export default Profile;
