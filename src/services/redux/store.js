import {configureStore} from "@reduxjs/toolkit"
import { moviesApi } from "../api/apiSlice"

const store=configureStore({
    reducer:{
        [moviesApi.reducerPath]:moviesApi.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(moviesApi.middleware),
    devTools: process.env.NODE_ENV !== 'production',


})
export default store