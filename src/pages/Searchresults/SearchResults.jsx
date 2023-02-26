import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import { MOVIES_PER_PAGE } from "../../components/Pagination/constants";
import Pagination from "../../components/Pagination/Pagination";
import {
	useGetLatestMoviesQuery,
	useGetTopMoviesQuery,
} from "../../services/api/movieSlice";

const SearchResults = () => {
	let { page } = useParams();
	const { data: latestMovies } = useGetLatestMoviesQuery();
	const { data: topMovies } = useGetTopMoviesQuery();
	const mergedmovies = latestMovies?.concat(topMovies) || [];
	const { searchQuery } = useParams();
	const [filteredMovies, setFilteredMovies] = useState([]);
	useEffect(() => {
		if (!searchQuery) setFilteredMovies(mergedmovies);
		else
			setFilteredMovies(
				mergedmovies.filter((mov) =>
					mov.name.toLowerCase().includes(searchQuery.toLowerCase())
				)
			);
	}, [searchQuery]);

	return (
		<>
			<Pagination
				totalPage={filteredMovies.length}
				pageNumber={(page = page ?? "1")}
				path={`/search/${searchQuery}/page`}
			/>
			<MovieList
				movies={filteredMovies.slice(
					(page - 1) * MOVIES_PER_PAGE,
					page * MOVIES_PER_PAGE - 1
				)}
			/>
		</>
	);
};
export default SearchResults;
