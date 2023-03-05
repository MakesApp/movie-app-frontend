import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieList from '../../components/MovieList/MovieList';
import { MOVIES_PER_PAGE } from '../../components/Pagination/constants';
import Pagination from '../../components/Pagination/Pagination';
import { Search } from '../../routes/constants';
import {  useGetMovieBySearchTermQuery } from '../../services/api/movieSlice';

const SearchResults = () => {
const params=useParams();
const {page,searchQuery}=params;
 const {data:moviesBySearch}=useGetMovieBySearchTermQuery(searchQuery,{skip:!searchQuery});

const {movies}=moviesBySearch||{};
  return movies&& (
    <>
    <Pagination
    totalPage={movies?.length}
    pageNumber={page??"1"}
path={`/search/${searchQuery}/page`}
    />
    <MovieList movies={movies?.slice((page-1)*MOVIES_PER_PAGE, page*MOVIES_PER_PAGE-1)}/>
    </>
  );
};

export default SearchResults;