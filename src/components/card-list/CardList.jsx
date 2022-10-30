import React from 'react';
import Card from '../card/Card';
import './ClassList.css';

const CardList = (props, forwardRef) => {
  const { monsters } = props;
  return (
    <div className='card-list'>
      {monsters.map((monster) => {
        return <Card monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
