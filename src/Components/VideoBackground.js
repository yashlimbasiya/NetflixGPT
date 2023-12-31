import React from "react";
import { useSelector } from "react-redux";
import useMovietrailer from "../hooks/useMovietrailer";

const VideoBackground = ({ movie_id }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovietrailer(movie_id);

  return (
    <div className="  ">
      <iframe
        className="w-screen aspect-video "
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&loop=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        frameBorder=""
        // height="750"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
