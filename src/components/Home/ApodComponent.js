import React, { useState, useEffect } from 'react';
import axios from 'axios';

//Importing the url and api key that was declared on app.js
import { generalUrl, api_key } from '../../App';

function ApodComponent() {
  const [apod, setApod] = useState({});

  useEffect(() => {
    axios
      .get(`${generalUrl}planetary/apod?api_key=${api_key}`)
      .then(res => {
        setApod(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>Picture of the day</h2>
      <h3>{apod.title}</h3>
      <img src={apod.url} alt='' />
      <p>{apod.explanation}</p>
    </div>
  );
}

export default ApodComponent;
