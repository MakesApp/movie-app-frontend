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
	// console.log( useGetLatestMoviesQuery());
	const [searchValue, setSearchValue] = useState("");
	const [searchSuggestions, setSearchSuggestions] = useState([]);
	const [fetch, setfetch] = useState(false);
	const { data: searchedMovies } = useGetMovieBySearchTermQuery(searchValue, {
		skip: !fetch,
	});
	useEffect(()=>{
        if(searchedMovies){
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
		e.preventDefault();
		setSearchSuggestions([]);
		setfetch(true);
		navigate(`search/${searchValue}/page/1`);


	};

	return (
		<S.SearchBar>
			<S.SearchBarForm>
				<S.SearchBarInput
					value={searchValue}
					type='text'
					placeholder='search for any movie'
					onChange={(e) => handleSearchChange(e)}
				/>
				<S.SearchBarSubmit
					type='submit'
					onClick={(e) => handleSearchSubmit(e)}
					value='Search'
				/>
			</S.SearchBarForm>
			<S.SearchBarSuggestions>
				{searchSuggestions?.map((sg, i) => (
					<S.SearchBarSuggestion
						to={`/movies/details/${sg.id}`}
						onClick={() => setSearchSuggestions([])}
						key={i}
						className='searchBar__suggestion'
					>
						<S.MovieImage src={sg.poster}></S.MovieImage>
						<S.MovieName>{sg.name}</S.MovieName>
						<p>{sg.year}</p>
						
					</S.SearchBarSuggestion>
				))}
			</S.SearchBarSuggestions>
		</S.SearchBar>
	);
};

export default SearchBar;
