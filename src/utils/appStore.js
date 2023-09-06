import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice"
import userReducer from "./userSlice";

const appStore = configureStore(
    {reducer:{
        user:userReducer,
        movies: movieReducer
    }}
)

export default appStore;