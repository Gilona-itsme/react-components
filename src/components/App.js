import React from 'react';

import Profile from './Profile';
import Statistics from './Statistics';
import FriendsList from './FriendsList';
import Transactions from './Transactions';

import user from '../data/user-data.json';
import statistical from '../data/statistical-data.json';
import friends from '../data/friends-data.json';
import transactions from '../data/transactions-data.json';

const App = () => {
  return (
    <>
      <Profile {...user} />
      <Statistics items={statistical} />
      <FriendsList friends={friends} />
      <Transactions transactions={transactions} />
    </>
  );
};

export default App;
