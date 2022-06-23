import { authService } from 'fbase';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Profile = () => {
  let history = useHistory();
  const onLogOutclick = () => {
    authService.signOut();
    history.push('/');
  };
  return (
    <>
      <button onClick={onLogOutclick}>Log Out</button>
    </>
  );
};
export default Profile;
