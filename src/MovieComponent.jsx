import React from "react";
import "./MovieComponent.css";

const MovieComponent = ({ movieInfo }) => {
  return (
    <div>
      {movieInfo.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img src={movie.thumbnailUrl} alt={movie.title} />
          <h3>{movie.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default MovieComponent;
