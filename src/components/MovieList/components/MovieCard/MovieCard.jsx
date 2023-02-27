import { useDispatch } from "react-redux";
import { addMovie } from "../../../../services/redux/userSlice";
import * as S from "./MovieCard.styles";

const MovieCard = ({ movie, hideButton }) => {
			const dispatch = useDispatch();

	const handleAddToWatchLater = ()=>{
		dispatch(addMovie(movie));

	};

	return (
		<S.Container>
			<S.PosterContainer>
				<S.Poster src={movie?.poster} alt='movie image' />
				{!hideButton && <S.Rating>{movie?.rating || "7.5"}</S.Rating>}
				{!hideButton && <S.AddButton onClick={() => handleAddToWatchLater()}>
					+
				</S.AddButton>}
			</S.PosterContainer>
			<S.TitleContainer>
				<S.Title>{movie?.name}</S.Title>
				<S.Year>{movie?.year || "2022"}</S.Year>
			</S.TitleContainer>
		</S.Container>
	);
};

export default MovieCard;
