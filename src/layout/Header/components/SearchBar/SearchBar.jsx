import { useState } from "react";
import { useGetLatestMoviesQuery, useGetMovieBySearchTermQuery } from "../../../../services/api/movieSlice";
import * as S from "./SearchBar.styles";
const SearchBar = () => {
	const { data: latestMovies } = useGetLatestMoviesQuery();
	const [searchValue, setSearchValue] = useState("");
	const [searchSuggestions, setSearchSuggestions] = useState([]);
	const {data:searchedMovies} = useGetMovieBySearchTermQuery(searchValue);

	const filterByQuery = (query) => {
		if (query === "") return [];
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
		setSearchSuggestions([]);

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
				{searchSuggestions?.map((sg, i) => (
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