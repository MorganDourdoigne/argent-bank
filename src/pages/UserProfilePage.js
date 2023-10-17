import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Account from '../components/Account';

function UserProfilePage() {
  return (
    <div>
      <Header />
      <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back<br />Tony Jarvis!</h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Account />
        <Account />
        <Account />
    </main>
       <Footer />
    </div>
  );
}

export default UserProfilePage;