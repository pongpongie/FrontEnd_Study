import React, { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import NewsCard from "./NewsCard";
import NewsList from "./NewsList";

import axiosHelper from "../../helpers/AxiosHelper";

const News = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    (async () => {
      let data = null;

      try {
        data = await axiosHelper.get("/news");
      } catch (e) {
        alert(e.message);
        return;
      }
      console.log(data.item);

      setNewsData(data.item);
    })();
  }, []);

  return (
    <div>
      <h1>News</h1>
      <nav>
        <Link to="/news/card">카드형</Link>
        <Link to="/news/list">리스트형</Link>
      </nav>
      <Routes>
        <Route path="card" element={<NewsCard news={newsData} />} />
        <Route path="list" element={<NewsList news={newsData} />} />
      </Routes>
    </div>
  );
};

export default News;
