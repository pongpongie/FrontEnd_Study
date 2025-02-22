import React, { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import NewsCard from "./NewsCard";
import NewsList from "./NewsList";

import axiosHelper from "../../helpers/AxiosHelper";

import { Blocks } from "react-loader-spinner";

const News = () => {
  const [newsData, setNewsData] = useState([]);

  const [loading, setLoading] = useState([]);

  useEffect(() => {
    (async () => {
      let data = null;

      setLoading(true);

      try {
        data = await axiosHelper.get("/news");
      } catch (e) {
        alert(e.message);
        return;
      }
      console.log(data.item);

      setNewsData(data.item);

      setLoading(false);
    })();
  }, []);

  return (
    <div>
      <h1>News</h1>
      <nav>
        <Link to="/news/card">카드형</Link>
        <Link to="/news/list">리스트형</Link>
      </nav>

      <Blocks
        height="100"
        width="100"
        ariaLabel="blocks-loading"
        wrapperStyle={{
          position: "fixed",
          zIndex: 9999,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
        wrapperClass="blocks-wrapper"
        visible={loading}
      />

      <Routes>
        <Route path="card" element={<NewsCard news={newsData} />} />
        <Route path="list" element={<NewsList news={newsData} />} />
      </Routes>
    </div>
  );
};

export default News;
