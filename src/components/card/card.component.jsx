import React from 'react';
import './card.style.scss';

export const Card = props => {
  const { name, image } = props.character;
  return (
    <li className="card">
      <img className="card__photo" src={image} alt={name} />
      <h2 className="card__name">{name}</h2>
    </li>
  );
};
