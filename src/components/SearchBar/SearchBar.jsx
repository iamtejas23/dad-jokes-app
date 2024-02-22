// SearchBar.jsx
import React from 'react';

const SearchBar = ({ handleSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search Jokes"
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
};

export default SearchBar;
