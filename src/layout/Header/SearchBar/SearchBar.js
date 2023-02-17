import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGetLatestMoviesQuery } from "../../../services/api/movieSlice";
import "./index.css";
const SearchBar = () => {
	const latestMovies = useGetLatestMoviesQuery();
	const [movieList, setMovieList] = useState(latestMovies.data || []);
	const [searchValue, setSearchValue] = useState("");
	const [searchSuggestions, setSearchSuggestions] = useState([]);

	const filterByQuery = (query) => {
		if (query === "") return [];
		console.log(latestMovies.data);
		return latestMovies.data.filter((movie) =>
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
		console.log({ searchSuggestions });
	};

	const handleSearchSubmit = (e) => {
		e.preventDefault();
		setMovieList(filterByQuery(searchValue));
		console.log({ movieList: filterByQuery(searchValue) });
		setSearchSuggestions([]);
	};

	return (
		<div className='searchBar'>
			<form className='searchBar__form'>
				<input
					value={searchValue}
					type='text'
					className='searchBar__input'
					placeholder='search for any movie'
					onChange={(e) => handleSearchChange(e)}
				/>
				<input
					className='searchBar__submit'
					type='submit'
					onClick={(e) => handleSearchSubmit(e)}
					value='Search'
				/>
			</form>
			<div className='searchBar__suggestions'>
				{searchSuggestions.map((sg, i) => (
					<Link to="/" key={i} className='searchBar__suggestion'>
						{sg.name}
					</Link>
				))}
			</div>
		</div>
	);
};

export default SearchBar;
