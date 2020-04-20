import React, { useState, useEffect } from 'react';
import axios from 'axios';

//Importing the url and api key that was declared on app.js
import { generalUrl, api_key } from '../../App';

function ApodComponent() {
  //apod will equal to the data from the nasa apod api
  const [apod, setApod] = useState({});

  useEffect(() => {
    axios
      .get(`${generalUrl}planetary/apod?api_key=${api_key}`)
      .then(res => {
        //Adds the nasa apod api to the state - apod
        setApod(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className='apod-container'>
      <h2>Picture of the day</h2>
      <h3>{apod.title}</h3>
      <img className='apod-img' src={apod.url} alt='' />
      <p className='apod-explantion'>{apod.explanation}</p>
    </div>
  );
}

export default ApodComponent;
