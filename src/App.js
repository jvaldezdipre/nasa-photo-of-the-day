import React from 'react';
import './App.css';
import NavMain from './components/NavMain';
import Home from './components/Home/Home';
import Mars from './components/Mars/Mars';

export const generalUrl = 'https://api.nasa.gov/';
export const api_key = 'U4loW7nqQ73uKAXebVYyxUtAsnaN2aeGuZkejSKi';

function App() {
  return (
    <div className='App'>
      <NavMain />
      <Home />
      {/* <Mars /> */}
    </div>
  );
}

export default App;
