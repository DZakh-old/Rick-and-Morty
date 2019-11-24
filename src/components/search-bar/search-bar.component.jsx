import React from 'react';
import './search-bar.styles.scss';

export const SearchBar = ({ handleChange, placeholder }) => (
  <input onChange={handleChange} className="search-bar" type="search" placeholder={placeholder} />
);
