import { useDispatch } from "react-redux";
import { addMovie, removeMovie } from "../../../../services/redux/userSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import * as S from "./MovieCard.styles";
import { useState } from "react";

const MovieCard = ({ movie, hideButton }) => {
	const dispatch = useDispatch();
	const [isAddedToWatchLater, setIsAddedToWatchLater] = useState(false);

	const handleAddToWatchLater = () => {
		dispatch(addMovie(movie));
		setIsAddedToWatchLater(true);
	};
	const handleRemoveMovie = (movie) => {
		dispatch(removeMovie(movie));
	};

	return (
		<S.Container>
			<S.PosterContainer>
				<S.Poster src={movie?.poster} alt='movie image' />
				{!hideButton && <S.Rating>{movie?.rating || "7.5"}</S.Rating>}
				{!hideButton && (
					<S.AddButton
						disabled={isAddedToWatchLater}
						onClick={() => handleAddToWatchLater()}
					>
						<FontAwesomeIcon
							icon={isAddedToWatchLater ? faCheck : faPlus}
							size='lg'
						/>
					</S.AddButton>
				)}
				{hideButton && (
					<S.RemoveButton onClick={() => handleRemoveMovie(movie)}>
						<FontAwesomeIcon icon={faTrash} size='lg' />
					</S.RemoveButton>
				)}
			</S.PosterContainer>
			<S.TitleContainer>
				<S.Title>{movie?.name}</S.Title>
				<S.Year>{movie?.year || "2022"}</S.Year>
			</S.TitleContainer>
		</S.Container>
	);
};

export default MovieCard;
