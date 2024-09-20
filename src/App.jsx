import React, { useState, useEffect } from "react";
import MovieComponent from "./MovieComponent";
import "./MovieComponent.css";

const App = () => {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const getCardData = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/photos?_limit=9&_page=${page}`
    );
    const data = await res.json();
    setCards((prev) => [...prev, ...data]);
    setLoading(false);
  };

  useEffect(() => {
    getCardData();
  }, [page]);

  const handleInfiniteScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLoading(true);
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  return (
    <>
      <div className="card-container">
        <MovieComponent movieInfo={cards} />
      </div>
      {loading && <div>Loading...</div>}
    </>
  );
};

export default App;
