import React from 'react';
import './card.style.scss';

export const Card = params => <li className="card">{params.character.name}</li>;
