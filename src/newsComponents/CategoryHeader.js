import React from 'react';
import { Button } from 'react-bootstrap';

const CategoryHeader = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="mb-3">
      {categories.map(category => (
        <Button
          key={category}
          variant={category === activeCategory ? 'primary' : 'outline-primary'}
          className="me-2"
          onClick={() => onCategoryChange(category)}
        >
          {category.toUpperCase()}
        </Button>
      ))}
    </div>
  );
};

export default CategoryHeader;
