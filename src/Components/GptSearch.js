import React from 'react'
import GptMovieSuggestion from './GptMovieSuggestion';
import GptSearchBar from './GptSearchBar';
import { LOGO } from '../utils/constants';

const GptSearch = () => {
  return (
    <div>
        <div className=" absolute -z-10 ">
        <img 
        
        src={LOGO}        alt="imag"
      ></img></div>
        <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch;