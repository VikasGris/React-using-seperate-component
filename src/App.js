import React from 'react';
//import logo from './logo.svg';
import './App.css';
import NavHeader from './NavHeader.js';
import NowScreening from './NowScreening.js';
import ComingSoon from './ComingSoon.js';
import Exclusive from './Exclusive.js';

function App() {
  return (
    <div className="App">
      <NavHeader/>
      <NowScreening/>
      <ComingSoon/>
      <Exclusive/>

    </div>
  );
}
export default App;
