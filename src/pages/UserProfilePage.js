import React from 'react';
import { useSelector } from 'react-redux';
import Account from '../components/Account';


function UserProfilePage() {
  const user = useSelector(state => state.user);

  return (
    <div>
        <main className="main bg-dark">
        <div className="header">
        <h1>Welcome back<br />{user ? user.name : ''}!</h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Account />
        <Account />
        <Account />
      </main>
         </div>
  );
}

export default UserProfilePage;
