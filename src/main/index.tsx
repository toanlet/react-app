import { useContext } from 'react';
import { UserContext, UserDispatchContext } from '../context/user-context';

interface MainProps {
  titleMain?: string;
  userNameMain?: string;
}
export const Main: React.FC<MainProps> = ({
  titleMain: title,
  userNameMain: userName,
}) => {
  return (
    <div>
      Main
      <TopNav />
      <Page />
    </div>
  );
};

export const TopNav: React.FC<{ title?: string }> = ({ title }) => {
  return <div> {title}</div>;
};

export const Page: React.FC<{ userName?: string }> = ({ userName }) => {
  return (
    <div>
      {' '}
      Profile: <Profile {...{ userName }} />
    </div>
  );
};

export const Profile: React.FC<{ userName?: string }> = ({ userName }) => {
  const user = useContext(UserContext);
  const setUser = useContext(UserDispatchContext);

  return (
    <div>
      {' '}
      {user?.userDetail}
      <button onClick={() => setUser({ userDetail: 'toan le' })}>change</button>
    </div>
  );
};
