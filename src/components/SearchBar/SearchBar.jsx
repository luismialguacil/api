import React from 'react';
import SearchStyle from './SearchBar-style';



const Search = ({ setSearch, updatePageNumber }) => {
    let searchBtn = (e) => {
      e.preventDefault();
    };
    return (
      <SearchStyle
      >
        <input
          onChange={(e) => {
            updatePageNumber(1);
            setSearch(e.target.value);
          }}
          placeholder="Search character"
          type="text"
        />
        <button
          onClick={searchBtn}
        >
          <i class="bi bi-search"></i>
        </button>
      </SearchStyle>
    );
  };

  export default Search;