import { useParams } from 'react-router-dom';
import { hooks as authedUserHook } from 'modules/Authentication/AuthedUser';
import Container from 'components/Container';
import MyProfile from './MyProfile';

const Profile = () => {
  const { userId } = useParams();
  const { authedUser } = authedUserHook.useAuthedUser();
  return (
    <Container isCentered>
      {parseInt(userId, 10) === authedUser.userId ? <MyProfile /> : <p>sxvisi</p>}
    </Container>
  );
};

export default Profile;
