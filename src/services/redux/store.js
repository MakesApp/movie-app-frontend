import {combineReducers, configureStore} from "@reduxjs/toolkit"
import { moviesApi } from "../api/apiSlice"
import userSlice from "./userSlice.js"
const reducer = combineReducers({
    [moviesApi.reducerPath]:moviesApi.reducer,
    userSlice:userSlice,
})
  
  
const store=configureStore({
reducer,    
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(moviesApi.middleware),
    devTools:process.env.NODE_ENV!=="production"

});
export default store;
