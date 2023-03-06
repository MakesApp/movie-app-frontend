import { useNavigate } from "react-router-dom";
import MovieCard from "./components/MovieCard/MovieCard";
import * as S from "./MovieList.styles";
const MovieList = ({ movies }) => {
	const navigate = useNavigate();
	const handleOnClick = (movieId) => {
		navigate(`/movies/details/${movieId}`);
	};
	
	const renderList = () => {
		return movies.map((movie) => (
			<MovieCard handleOnClick={()=>handleOnClick(movie.id)} key={movie.id} movie={movie}/>
		));
	};

	return <S.Container>{renderList()}</S.Container>;
};

export default MovieList;
