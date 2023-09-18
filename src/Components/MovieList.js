import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div>
      <div className="p-4  ">
        <h1 className="text-3x-py-4 text-white pl-6 relative">{title}</h1>
        <div className="flex overflow-x-scroll z-20 ">
          <div className="flex ">
            {movies?.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
