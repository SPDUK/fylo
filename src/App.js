import React from 'react';
import Navbar from './components/navbar/navbar';
import Jumbotron from './components/jumbotron/jumbotron';
import Info from './components/info/info';
import EarlyAccess from './components/early-access/early-access';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Info />
      <EarlyAccess />
      <Footer />
    </>
  );
}

export default App;
