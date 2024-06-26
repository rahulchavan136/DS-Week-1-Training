import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const Pagination = ({ currentPage, totalPages, onNextPage, onPrevPage }) => {
  return (
    <ButtonGroup className="mt-3">
      <Button variant="outline-primary" disabled={currentPage === 1} onClick={onPrevPage}>
        Previous
      </Button>
      <Button variant="outline-primary" disabled={currentPage === totalPages} onClick={onNextPage}>
        Next
      </Button>
    </ButtonGroup>
  );
};

export default Pagination;
