import React, { useState } from 'react';
import FloatingActionButton from './FloatingActionButton';
import './Search.css';
import SearchOutline from './ICONS/search-outline.svg';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [inputWidth, setInputWidth] = useState(100);

  const search = async () => {
    // Perform search
  };

  const handleChange = (event) => {
    const textLength = event.target.value.length;
    // minimum width is 100, each character adds 10 units to the width, up to a maximum of 300
    setInputWidth(Math.min(Math.max(100, textLength * 6.6), 300));
    setSearchText(event.target.value);
  };

  return (
    <div className="container">
      <div className="search-area">
        <input
          type="text"
          className="search-input"
          placeholder=""
          value={searchText}
          onChange={handleChange}
          style={{ width: `${inputWidth}px` }}
        />
        <button className="search-button" onClick={search}>
          <img src={SearchOutline} className="search-button-icon" alt="Search" />
        </button>
      </div>
      <FloatingActionButton />  {/* Add the FAB here */}
    </div>
  );
};

export default Search;
