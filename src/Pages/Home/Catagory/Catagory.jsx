import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";

const Catagory = () => {
  const catagoriNews = useLoaderData();
  const { id } = useParams();
  return (
    <div>
      {id && <h1>This is cata goray {catagoriNews.length}</h1>}
      {catagoriNews.map((news) => (
        <NewsCard key={news._id} news={news}></NewsCard>
      ))}
    </div>
  );
};

export default Catagory;
