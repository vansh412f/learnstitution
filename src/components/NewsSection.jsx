import React, { useState, useEffect } from "react";
import axios from "axios";
import "./NewsSection.css";

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const apiKey = "c433132581dd4044bdcdf427d69b9f6e"; // Your News API key
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

  // Fetch news articles and randomize the order each time
  const fetchRandomHeadlines = () => {
    axios
      .get(url)
      .then((response) => {
        // Filter out articles that do not have a valid image URL
        const validArticles = response.data.articles.filter(
          (article) => article.urlToImage && isValidImageUrl(article.urlToImage)
        );

        // Shuffle the valid articles
        const shuffledArticles = shuffleArray(validArticles);
        setArticles(shuffledArticles.slice(0, 6)); // Limit to 6 articles
      })
      .catch((error) => {
        console.error("Error fetching the news data:", error);
      });
  };

  // Function to validate if the image URL is valid
  const isValidImageUrl = (url) => {
    return url && url.startsWith("http"); // Ensures the URL starts with "http" (basic check)
  };

  // Shuffle array function to randomize the headlines order
  const shuffleArray = (array) => {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
    }
    return shuffled;
  };

  // Fetch random headlines on initial render and on each refresh
  useEffect(() => {
    fetchRandomHeadlines(); // Fetch on mount
  }, []);

  return (
    <div className="news-section">
      <h2>Top Headlines</h2>

      <div className="news-grid">
        {articles.map((article, index) => (
          <div className="news-card" key={index}>
            {/* Conditionally render the image if available */}
            <img
              src={article.urlToImage}
              alt={article.title}
              className="news-image"
              onError={(e) => e.target.style.display = "none"} // Hide image if it doesn't load
            />
            <div className="news-text">
              <h3 className="news-title">{article.title}</h3>
              <p className="news-description">{article.description}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="read-more"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
      <button className="button" onClick={fetchRandomHeadlines}>
        <span>More Headlines</span>
        <i className="ri-newspaper-fill"></i>
      </button>
    </div>
  );
};

export default NewsSection;
