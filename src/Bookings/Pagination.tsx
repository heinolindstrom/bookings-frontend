import React from 'react';
import { ITEMS_ON_PAGE } from '.';
import './pagination.css';

type PaginationProps = {
  offset: number;
  count: number;
  itemsOnPage: number;
  setOffset: (offset: number) => void;
};

const Pagination = ({
  offset,
  count,
  itemsOnPage,
  setOffset,
}: PaginationProps): JSX.Element => {
  if (count === 0) {
    return <></>;
  }

  const pageCount = count / itemsOnPage + (count % itemsOnPage > 0 ? 1 : 0);
  const currentPage = offset / itemsOnPage + 1;

  let pages = [];

  for (let i = 1; i < pageCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((page) => (
        <span
          onClick={(e) => setOffset(itemsOnPage * page - ITEMS_ON_PAGE)}
          className={
            page === currentPage ? 'page-button active' : 'page-button'
          }
        >
          {page}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
