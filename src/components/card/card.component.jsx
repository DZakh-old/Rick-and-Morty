import React from 'react';
import './card.style.scss';

export const Card = params => {
  const { name, image } = params.character;
  return (
    <li className="card">
      <img className="card__photo" src={image} alt={name} />
      <h2 className="card__name">{name}</h2>
    </li>
  );
};
