import React from 'react';
import ApodComponent from './ApodComponent';

function Home() {
  return (
    <div className='home-container'>
      <div>
        <h1>Im the homepage</h1>
      </div>
      <ApodComponent />
    </div>
  );
}

export default Home;
