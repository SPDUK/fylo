import React from 'react';
import Navbar from './components/navbar/navbar';
import Jumbotron from './components/jumbotron/jumbotron';
import Info from './components/info/info';
import EarlyAccess from './components/early-access/early-access';

function App() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Info />
      <EarlyAccess />
    </>
  );
}

export default App;
