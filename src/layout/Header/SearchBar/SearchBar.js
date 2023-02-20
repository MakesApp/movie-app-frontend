import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGetLatestMoviesQuery } from "../../../services/api/movieSlice";
import * as S from "./SearchBar.styles";
import { useGetMovieBySearchQuery } from "../../../services/api/movieSlice";
const SearchBar = () => {
	const { data: latestMovies } = useGetLatestMoviesQuery();
	const Search = useGetMovieBySearchQuery();
	console.log(Search);
	const [searchValue, setSearchValue] = useState("");
	const [searchSuggestions, setSearchSuggestions] = useState([]);

	const filterByQuery = (query) => {
		if (query === "") return [];
		console.log(latestMovies);
		return latestMovies.filter((movie) =>
			movie.name.toLowerCase().includes(query.toLowerCase())
		);
	};

	const handleSearchChange = async (e) => {
		const { value } = e.target;
		setSearchValue(value);
		setTimeout(() => {
			if (!value === searchValue) return;
		}, 150);
		setSearchSuggestions(filterByQuery(value).slice(0, 3));
	};

	const handleSearchSubmit = (e) => {
		e.preventDefault();
		// setMovieList(filterByQuery(searchValue));
		//searchMovie function
		setSearchSuggestions([]);

		console.log({ movieList: filterByQuery(searchValue) });
	};

	return (
		<S.searchBar>
			<S.SearchBarForm>
				<S.searchBarInput
					value={searchValue}
					type='text'
					placeholder='search for any movie'
					onChange={(e) => handleSearchChange(e)}
				/>
				<S.searchBarSubmit
					type='submit'
					onClick={(e) => handleSearchSubmit(e)}
					value='Search'
				/>
			</S.SearchBarForm>
			<S.searchBarSuggestions>
				{searchSuggestions.map((sg, i) => (
					<S.searchBarSuggestion
						to='/'
						key={i}
						className='searchBar__suggestion'
					>
						{sg.name}
					</S.searchBarSuggestion>
				))}
			</S.searchBarSuggestions>
		</S.searchBar>
	);
};

export default SearchBar;
