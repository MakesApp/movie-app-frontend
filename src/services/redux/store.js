import {configureStore} from "@reduxjs/toolkit"
import { moviesApi } from "../api/apiSlice"
import  userSlice from "../redux/app.slice"
const store=configureStore({
    reducer:{
        [moviesApi.reducerPath]:moviesApi.reducer,
        userreducer:userSlice,
        
    },
    
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(moviesApi.middleware),
    devTools:process.env.NODE_ENV!=="production"

    


})
export default store