import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import NewsCard from "./NewsCard";
import NewsList from "./NewsList";

const News = () => {
  const [newsData, setNewsData] = useState([]);
  return (
    <div>
      <h1>News</h1>
      <nav>
        <Link to="news_card">카드형</Link>
        <Link to="news_list">리스트형</Link>
      </nav>
      <Routes>
        <Route path="news_card" element={<NewsCard news={newsData} />} />
        <Route path="news_list" element={<NewsList news={newsData} />} />
      </Routes>
    </div>
  );
};

export default News;
