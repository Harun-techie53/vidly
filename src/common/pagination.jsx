import React from "react";

const Pagination = ({
  moviesCount,
  pageSize,
  currentPage,
  handlePageChange,
}) => {
  const pagesCount = Math.ceil(moviesCount / pageSize);
  const pageNumbers = [];
  for (let i = 1; i <= pagesCount; i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <nav aria-label="...">
        <ul className="pagination">
          {pageNumbers.map((page) => (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <a
                onClick={handlePageChange.bind(this, page)}
                className="page-link"
                style={{ cursor: "pointer" }}
                tabindex="-1"
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
