import MovieCard from "./components/MovieCard/MovieCard";
import * as S from "./MovieList.styles";
const MovieList = ({ movies, hideButton }) => {
	console.log(movies);
	const renderList = () => {
		return movies.map((movie) => (
			<MovieCard key={movie.id} movie={movie} hideButton={hideButton}></MovieCard>
		));
	};
	return <S.Container>{renderList()}</S.Container>;
};

export default MovieList;
