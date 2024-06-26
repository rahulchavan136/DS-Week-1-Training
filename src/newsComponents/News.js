import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import CategoryHeader from './CategoryHeader';
import NewsLists from './NewsLists';

const News = () => {
  const [news, setNews] = useState({});
  const [activeCategory, setActiveCategory] = useState('business'); // default categ
  const [currentPage, setCurrentPage] = useState(1); 
  
  const apiKey = 'acfaad215de840c39c93c6fc258e3141';
  const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

  useEffect(() => {
    const fetchNewsForCategory = async (category) => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
          params: {
            country: 'in',
            category: category,
            apiKey: apiKey
          }
        });
        
        console.log("news===>",news);

        setNews(prevNews => ({
          ...prevNews,
          [category]: response.data.articles
        }));
        setCurrentPage(1); 
        // Reset current page to 1 whenever category changes
      } catch (error) {
        console.error(`Error fetching news for category ${category}:`, error);
      }
    };

    fetchNewsForCategory(activeCategory);

  }, [activeCategory]); 

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <Container>
      <h1>All News Categories</h1>
      <CategoryHeader
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />
      {news[activeCategory] && (
        <div>
          <h2>{activeCategory.toUpperCase()}</h2>
          <NewsLists articles={news[activeCategory]} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
      )}
    </Container>
  );
};

export default News;
