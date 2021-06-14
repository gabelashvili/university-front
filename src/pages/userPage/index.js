import { Header, Authentication, Profile } from 'components/UserPage/';
import { useParams } from 'react-router-dom';

const userPage = () => {
  const { type } = useParams();
  return (
    <>
      <Header />
      {type === 'profile' && <Profile />}
      {(type === 'login' || type === 'register' || type === 'forgot-password') && <Authentication />}
    </>
  );
};

export default userPage;
