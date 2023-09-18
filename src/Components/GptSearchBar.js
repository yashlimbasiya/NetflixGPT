import React,{useRef} from "react";
import { useSelector,useDispatch} from "react-redux";
import {language} from "../utils/lanuageConstants";
import openai from "../utils/openai";
import {API_OPTIONS} from "../utils/constants"
import {addGptMovieResults} from '../utils/gptSlice'

const GptSearchBar = () => {
const searchText= useRef(null)
const langKey = useSelector((store)=> store.config?.lang)
const dispatch =useDispatch();

const searchMovieTMDB = async (movie) => {
  const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS)
  const json = await data.json();
  return json.results;

}


const handleGptSearchClick = async() => {
  console.log(searchText.current.value);

const gptQuery ="Act as a Movie recommendation system and suggest some movies for the query : " + searchText.current.value + ". only give me names of 5 movies , comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don , Golmaal, Koi Mil Gaya "

  const gptSearch = await openai.chat.completions.create({
    messages: [{ role: 'user', content: gptQuery}],
    model: 'gpt-3.5-turbo',
  });
 if (!gptSearch.choices){
   <p className="text-black font-bold">There are No searche results ! Please go back ans Search again</p>
 }
  console.log(gptSearch.choices?.[0]?.message?.content);
  const gptMovies = gptSearch.choices?.[0]?.message?.content.split(',')
//["Andaaz Apna Apna "", " Angoor"]
  /// for each movie i will search tmdb api 

const promiseArray =gptMovies.map(movie=>searchMovieTMDB(movie));
const tmdbResults= await Promise.all(promiseArray);
console.log(tmdbResults);

dispatch(addGptMovieResults({movieResults: tmdbResults, movieNames: gptMovies}))

}

    
  return (
    <div className="pt-[8%] flex justify-center ">
      <form className="w-1/2 bg-black grid grid-cols-12 " onSubmit={(e)=> e.preventDefault()}>
        <input
        ref={searchText}
          type="text"
          className="p-2 m-2 col-span-9"
          placeholder={language[langKey]?.gptSearchPlaceHolder}
        ></input>
        <button className="py-2 px-4 m-2 col-span-3 bg-red-700 text-white rounded-lg" onClick={handleGptSearchClick}>
          {language[langKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
