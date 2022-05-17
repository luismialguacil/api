import React from "react";
import PaginationItem from "./Pagination-style";

const Pagination = () => {
    return(
        <PaginationItem>
            <button className="btn"><i class="bi bi-chevron-left me-2"></i>Prev</button>
            <button className="btn">Next<i class="bi bi-chevron-right ms-2"></i></button>
        </PaginationItem>
    )
}

export default Pagination;