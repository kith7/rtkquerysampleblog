import React from "react";

const Pagination = () => {
  return (
    <div className='row bm-row bm-mt-100 bm-mb-75'>
      <div className='bm-prev-next-wrapper'>
        <a
          href='#'
          className='mb-2 bm-btn bm-btn-primary bm-prev-next disabled bm-mr-20'
        >
          Prev
        </a>
        <a href='#' className='mb-2 bm-btn bm-btn-primary bm-prev-next'>
          Next
        </a>
      </div>
      <div className='bm-paging-wrapper'>
        <span className='d-inline-block mr-3'>Page</span>
        <nav className='bm-paging-nav d-inline-block'>
          <ul>
            <li className='bm-paging-item active'>
              <a href='#' className='mb-2 bm-btn bm-paging-link'>
                1
              </a>
            </li>
            <li className='bm-paging-item'>
              <a href='#' className='mb-2 bm-btn bm-paging-link'>
                2
              </a>
            </li>
            <li className='bm-paging-item'>
              <a href='#' className='mb-2 bm-btn bm-paging-link'>
                3
              </a>
            </li>
            <li className='bm-paging-item'>
              <a href='#' className='mb-2 bm-btn bm-paging-link'>
                4
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
