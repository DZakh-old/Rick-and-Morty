import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.scss';

export const CardList = ({ characters }) => (
  <ul className="card-list container">
    {characters.map(character => (
      <Card key={character.id} character={character} />
    ))}
  </ul>
);
