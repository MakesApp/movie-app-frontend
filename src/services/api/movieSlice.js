import {createApi} from "@reduxjs/toolkit/query/react"
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { BASE_URL } from "../../CONSTANS/constants"
import { GET_LATEST_MOVIES } from "./constants"
import { GET_TOP_MOVIES } from "./constants"
export const moviesApi=createApi({
    reducerPath:"moviesApi",
    baseQuery:fetchBaseQuery({baseUrl:`${BASE_URL}`}),
    tagTypes:["Moviesapi"],

    endpoints:(builder)=>({
        getLatestMovies:builder.query({
            query:()=>GET_LATEST_MOVIES(),
           
        }),
        getTopMovies:builder.query({
            query:()=>GET_TOP_MOVIES(),
           
        })



    })


})
export const {useGetLatestMoviesQuery,useGetTopMoviesQuery} =moviesApi

