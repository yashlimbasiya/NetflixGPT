import React from "react";
import { useSelector } from "react-redux";
import {language} from "../utils/lanuageConstants";

const GptSearchBar = () => {
    const langKey = useSelector((store)=> store.config?.lang)
  return (
    <div className="pt-[8%] flex justify-center ">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-2 m-2 col-span-9"
          placeholder={language[langKey]?.gptSearchPlaceHolder}
        ></input>
        <button className="py-2 px-4 m-2 col-span-3 bg-red-700 text-white rounded-lg">
          {language[langKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
