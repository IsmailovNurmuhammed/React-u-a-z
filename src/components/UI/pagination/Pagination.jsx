import React from 'react';
import {usePagination} from "../../../hooks/usePagination";

const Pagination = ({totalPages, changePage, currentPage}) => {
  const pagesArray = usePagination(totalPages);
  console.log(currentPage);
  console.log(totalPages);
  console.log(pagesArray);
  return (
    <div className="pagination-wrapper">
      {
        pagesArray.map((pageNum) =>
          <span className={currentPage === pageNum
            ? "pagination-item active"
            : "pagination-item"}
                key={pageNum}
                onClick={() => changePage(pageNum)}
          >{pageNum}
          </span>)
      }
    </div>
  );
};

export default Pagination;