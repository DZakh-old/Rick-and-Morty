import React from 'react';
import { Card } from '../card/card.component';
import './card-list.style.scss';

export const CardList = props => (
  <ul className="card-list">
    {props.characters.map(character => (
      <Card key={character.id} character={character} />
    ))}
  </ul>
);
