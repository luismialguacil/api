import React from 'react';
import Search from '../../components/SearchBar/SearchBar';
import FilterButton from '../../components/Filter/Filter';
import FiltersContainer from './Filters-style';

const FiltersBar = () => {
    return(
        <div className="container">
            <FiltersContainer className="row">
                <FilterButton></FilterButton>
                
            </FiltersContainer>
        </div>
    )
}
export default FiltersBar;