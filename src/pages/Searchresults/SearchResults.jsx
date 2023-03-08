<<<<<<< HEAD
// import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import { MOVIES_PER_PAGE } from "../../components/Pagination/constants";
import Pagination from "../../components/Pagination/Pagination";
// import { Search } from "../../routes/constants";
import { useGetMovieBySearchTermQuery } from "../../services/api/movieSlice";

const SearchResults = () => {
	const params = useParams();
	const { page, searchQuery } = params;
	const { data: moviesBySearch } = useGetMovieBySearchTermQuery(searchQuery, {
		skip: !searchQuery,
	});

	const { movies } = moviesBySearch || {};
	return (
		movies && (
			<>
				<Pagination
					totalPage={movies?.length}
					pageNumber={page ?? "1"}
					path={`/search/${searchQuery}/page`}
				/>
				<MovieList
					movies={movies?.slice(
						(page - 1) * MOVIES_PER_PAGE,
						page * MOVIES_PER_PAGE - 1
					)}
				/>
			</>
		)
=======
import { useNavigate, useParams } from 'react-router-dom';
import MovieCard from '../../components/MovieCard/MovieCard';
import MovieList from '../../components/MovieList/MovieList';
import Pagination from '../../components/Pagination/Pagination';
import {  useGetMovieBySearchTermQuery } from '../../services/api/movieApi';
import * as S from './SearchResults.style';
const SearchResults = () => {
	const params=useParams();
	const navigate=useNavigate();
	const {page,searchTerm}=params;
	const {data:moviesBySearch}=useGetMovieBySearchTermQuery(({searchTerm,page}),{skip:!searchTerm});

	const {movies,totalPages}=moviesBySearch||{};
	const handlePaginationClick=(event)=>{
		const selectedPage=event.selected;
		navigate(`/search/${searchTerm}/page/${selectedPage+1}`);
	};
	return movies&& (
		<S.Container>
    
			<Pagination initialPage={page} itemsPerPage={totalPages} handleOnClick={handlePaginationClick}/>
			<MovieList >
				{movies?.map(movie=>
        	<MovieCard
						key={movie.id}
						movie={movie}
					></MovieCard>
				)}
			</MovieList>
		</S.Container>
>>>>>>> 0248eec6348603f1317c4b8b16301b0684efc8fc
	);
};

export default SearchResults;
