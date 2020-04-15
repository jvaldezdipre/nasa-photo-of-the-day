import React from 'react';
import Weather from './WeatherComponent';

function Mars() {
  return (
    <div className='mars-container'>
      <div className='mars-header-container'>
        <h1>Welcome to the weather for Mars!</h1>
      </div>
      <section className='mars-detail'>
        <p>In this page we will be showing the latest weather in Mars</p>
      </section>
      <Weather />
    </div>
  );
}

export default Mars;
