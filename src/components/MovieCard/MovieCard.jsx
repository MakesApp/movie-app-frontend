
import { useNavigate } from "react-router-dom";
import * as S from "./MovieCard.styles";

const MovieCard = ({ movie ,children}) => {

	const navigate=useNavigate();
	const handleOnClick=()=>{
		navigate(`/movies/details/${movie.id}`);
	};

	return (
		<S.Container onClick={handleOnClick}>
			<S.PosterContainer>
				<S.Poster src={movie?.poster} alt='movie image' />
				{<S.Rating>{movie?.rating || "7.5"}</S.Rating>}
				{children}
			</S.PosterContainer>
			<S.TitleContainer>
				<S.Title>{movie?.name}</S.Title>
				<S.Year>{movie?.year || "2022"}</S.Year>
			</S.TitleContainer>
		</S.Container>
	);
};

export default MovieCard;
