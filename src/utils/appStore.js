import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice"
import userReducer from "./userSlice";
import gptReducer from './gptSlice'
import configReducer from './configSlice'

const appStore = configureStore(
    {reducer:{
        user:userReducer,
        movies: movieReducer,
        gptSlice: gptReducer,
        config: configReducer,

    }}
)

export default appStore;