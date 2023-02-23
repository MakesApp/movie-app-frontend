import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Detail, Search } from "../../../../routes/constants";
import {
	useGetLatestMoviesQuery,
	useGetMovieBySearchTermQuery,
	useGetTopMoviesQuery,
} from "../../../../services/api/movieSlice";
import * as S from "./SearchBar.styles";
const SearchBar = () => {
	const navigate=useNavigate();
	const { data: latestMovies } = useGetLatestMoviesQuery();
	const {data:topMovies}=useGetTopMoviesQuery();
	const mergedmovies=latestMovies?.concat(topMovies)||[];
	console.log( useGetLatestMoviesQuery());
	const [searchValue, setSearchValue] = useState("");
	const [searchSuggestions, setSearchSuggestions] = useState([]);
	const [fetch, setfetch] = useState(false);
	const { data: searchedMovies } = useGetMovieBySearchTermQuery(searchValue, {
		skip: !fetch,
	});
	console.log(searchedMovies);
	useEffect(()=>{
        if(searchedMovies){
			// setSearchSuggestions(searchedMovies.movies);
        setfetch(false);
		}
    },[searchedMovies]);

	const filterByQuery = (query) => {
		if (query === "") return [];
		return mergedmovies.filter((movie) =>
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
		navigate(`search/${searchValue}/page/1`);
		e.preventDefault();
		setSearchSuggestions([]);
		setfetch(true);
		

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
						to={`/movies/details/${sg.id}`}
						onClick={() => setSearchSuggestions([])}
						key={i}
						className='searchBar__suggestion'
					>
						<S.movieImage src={sg.poster}></S.movieImage>
						<S.movieName>{sg.name}</S.movieName>
						<p>{sg.year}</p>
						
					</S.searchBarSuggestion>
				))}
			</S.searchBarSuggestions>
		</S.searchBar>
	);
};

export default SearchBar;
