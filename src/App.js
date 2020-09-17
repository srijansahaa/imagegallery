import React from 'react';
import './App.css';

import Navbar from './Components/Navbar'
import Landing from './Components/Landing';
import Images from './Components/Tabs1';

function App() {
  return (
    <div className="my-div">
      <Navbar/>
      <Landing/>
      <Images/>
    </div>
  );
}

export default App;
