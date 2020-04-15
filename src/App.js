import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home/Home';
import Mars from './components/Mars/Mars';
import axios from 'axios';

export const generalUrl = 'https://api.nasa.gov/';
export const api_key = 'U4loW7nqQ73uKAXebVYyxUtAsnaN2aeGuZkejSKi';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Home />
      {/* <Mars /> */}
    </div>
  );
}

export default App;
