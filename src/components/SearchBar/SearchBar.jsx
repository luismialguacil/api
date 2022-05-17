import React from 'react';
import SearchStyle from './SearchBar-style';

const SearchBar = () => {
    return(
        <SearchStyle className="col-11 col-lg-6">
            <input type="text" name="search" id="search" placeholder='Search character'/>
            <i class="bi bi-search"></i>
        </SearchStyle>
    )
}

export default SearchBar;