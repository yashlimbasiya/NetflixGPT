import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  //early return
  if (!movies) {
    return;
  }

  const mainMovie = movies[1];
  const {original_title, overview, id } = mainMovie
  console.log(mainMovie)
  return (
    <div>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground movie_id = {id} />
    </div>
  );
};

export default MainContainer;