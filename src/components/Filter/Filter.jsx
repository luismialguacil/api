import React from "react";
import FiltersButton from "./Filter-style";

const FilterButton = () => {
    return(
        <div className="col-12 col-lg-6 my-3 my-lg-0">
        <FiltersButton className="btn">
           <i class="bi bi-funnel"></i> Filters 
        </FiltersButton>
        </div>
    )
}

export default FilterButton;
