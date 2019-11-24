import React from 'react';
import './search-bar.style.scss';

export const SearchBar = props => <input onChange={props.onChangeEvent} className="search-bar" type="search" placeholder="Find character" />;
