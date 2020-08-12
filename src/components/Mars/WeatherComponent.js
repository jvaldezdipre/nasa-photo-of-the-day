import React, { useState } from 'react';
import { generalUrl, api_key } from '../../App';
import axios from 'axios';

function WeatherComponent() {
  axios
    .get(
      `${generalUrl}insight_weather/?api_key=${api_key}&feedtype=json&ver=1.0`
    )
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    });
  return (
    <div>
      <h1>I am the weather component</h1>
    </div>
  );
}

export default WeatherComponent;
