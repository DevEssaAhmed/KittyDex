import React from 'react';
import './Card.css';

const Card = ({ monster }) => {
  const { id, name, email } = monster;
  return (
    <div className='card-container' key={id}>
      <img
        src={`https://robohash.org/${id}?set=set4`}
        alt={`monster ${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
