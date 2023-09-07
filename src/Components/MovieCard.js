import React from 'react'
import { CDN_IMG_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className="w-48 pr-4 bg-relative pl-6 z-20">
      <img src={CDN_IMG_URL + posterPath}  alt="" />
    </div>
  )
}

export default MovieCard
