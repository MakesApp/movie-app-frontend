import {combineReducers, configureStore} from "@reduxjs/toolkit"
import { moviesApi } from "../api/apiSlice"
import userslice from "./userslice.js"
console.log(userslice)

const reducer = combineReducers({
    [moviesApi.reducerPath]:moviesApi.reducer,
    userslice:userslice,
})
  
  
const store=configureStore({
reducer,    
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(moviesApi.middleware),
    devTools:process.env.NODE_ENV!=="production"

});
export default store;
