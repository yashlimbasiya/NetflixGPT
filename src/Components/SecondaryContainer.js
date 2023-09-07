import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from "./MovieList"

const SecondaryContainer = () => {
const movies = useSelector((store) => store.movies)


  return movies && (
    <div >
    <div className=" -mt-40 ">
      <MovieList title = {"Now Playing"} movies= {movies.nowPlayingMovies}/>
      <MovieList title = {"Top Rated"} movies= {movies.topRatedMovies}/>
      <MovieList title = {"Popular"} movies={movies.popularMovies}/>
      <MovieList title = {"Upcoming"} movies= {movies.upcomingMovies}/>
      <MovieList title = {"Horror"} movies= {movies.nowPlayingMovies}/>
      
    </div>
    </div>
  )
}

export default SecondaryContainer
