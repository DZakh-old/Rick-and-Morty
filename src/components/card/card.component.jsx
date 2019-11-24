import React from 'react';
import './card.styles.scss';

export const Card = ({ character }) => {
  const { name, image } = character;
  return (
    <li className="card">
      <img className="card__photo" src={image} alt={name} />
      <h2 className="card__name">{name}</h2>
    </li>
  );
};
