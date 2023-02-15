import MovieCard from "./components/MovieCard/MovieCard";
import * as S from './MovieList.styles';
const MovieList = ({ movies }) => {
	const renderList = () => {
		return movies.map((movie) => (
			<MovieCard key={movie.id} movie={movie}></MovieCard>
		));
	};
	return <S.Container>{renderList()}</S.Container>;
};

export default MovieList;
