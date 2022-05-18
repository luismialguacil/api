import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import PaginationItem from "./Pagination-style";

const Pagination = ({ pageNumber, info, updatePageNumber }) => {
  let pageChange = (data) => {
    updatePageNumber(data.selected + 1);
  };

  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <PaginationItem>
      <ReactPaginate
        className="pagination"
        nextLabel="Next >"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel="< Prev"
        previousClassName="btn prev"
        nextClassName="btn next"
        activeClassName="act"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        pageCount={info?.pages}
        onPageChange={pageChange}
        pageClassName="item"
        pageLinkClassName="link"
      />
    </PaginationItem>
  );
};

export default Pagination;
