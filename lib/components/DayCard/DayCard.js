import React, { Component } from 'react';
import './DayCard.css';
import handleImages from '../Container/handleImages.js';

const DayCard = ({ dayName, high, low, condition }) => {
  const displayImage = handleImages(condition);

  return (
    <div className="day-card" key={dayName}>
      <p>{dayName}</p>
      <img src={displayImage} />
      <p className="day-card-hi">Hi: {high} &#8457;</p>
      <p>Lo: {low} &#8457;</p>
    </div>
  );
};

export default DayCard;
