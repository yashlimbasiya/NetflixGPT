import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux'
import { addTrailerVideo } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';

const useMovietrailer = (movie_id) => {
    const dispatch = useDispatch();
  
  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.result[0];
    
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideo();
  }, [] );
  
  return (
    <div>
      
    </div>
  )
}

export default useMovietrailer
