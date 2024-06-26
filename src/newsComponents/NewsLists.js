import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Pagination from './Pagination';

const NewsList = ({ articles }) => {
  const pageSize = 8;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total number of pages
  const totalPages = Math.ceil(articles.length / pageSize);
    console.log("totalPages==>",totalPages);

  // Pagination logic to slice articles based on current page
  const startIndex = (currentPage - 1) * pageSize;
  const slicedArticles = articles.slice(startIndex, startIndex + pageSize);
  console.log("startIndex==>",startIndex);

  console.log("slicedArticles==>",slicedArticles);

   const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

   const handlePrevPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  return (
    <div>
      <div className="d-flex flex-wrap">
        {slicedArticles.map((article, index) => (
          <Card key={index} style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={article.urlToImage || 'https://via.placeholder.com/150x150'} />
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              <Card.Link href={article.url} target="_blank" rel="noopener noreferrer">Read More</Card.Link>
            </Card.Body>
          </Card>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
      />
      <p className="mt-3">Page {currentPage} of {totalPages}</p>
    </div>
  );
};

export default NewsList;
