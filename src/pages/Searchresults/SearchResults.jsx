import { useNavigate, useParams } from "react-router-dom";
import MovieCard from "../../components/MovieCard/MovieCard";
import MovieList from "../../components/MovieList/MovieList";
import Pagination from "../../components/Pagination/Pagination";
import { useGetMovieBySearchTermQuery } from "../../services/api/movieApi";
import * as S from "./SearchResults.style";
const SearchResults = () => {
	const params = useParams();
	const navigate = useNavigate();
	const { page, searchTerm } = params;
	const { data: moviesBySearch } = useGetMovieBySearchTermQuery(
		{ searchTerm, page },
		{ skip: !searchTerm }
	);

	const { movies, totalPages } = moviesBySearch || {};
	const handlePaginationClick = (event) => {
		const selectedPage = event.selected;
		navigate(`/search/${searchTerm}/page/${selectedPage + 1}`);
	};
	return (
		movies && (
			<S.Container>
				<Pagination
					initialPage={page}
					itemsPerPage={totalPages}
					handleOnClick={handlePaginationClick}
				/>
				<MovieList>
					{movies?.map((movie) => (
						<MovieCard key={movie.id} movie={movie}></MovieCard>
					))}
				</MovieList>
			</S.Container>
		)
	);
};

export default SearchResults;
