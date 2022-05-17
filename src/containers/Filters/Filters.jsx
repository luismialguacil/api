import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import FilterButton from '../../components/Filter/Filter';
import FiltersContainer from './Filters-style';

const FiltersBar = () => {
    return(
        <div className="container">
            <FiltersContainer className="row">
                <FilterButton></FilterButton>
                <SearchBar></SearchBar>
            </FiltersContainer>
        </div>
    )
}
export default FiltersBar;