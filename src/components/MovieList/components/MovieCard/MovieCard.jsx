import * as S from "./MovieCard.styles";

const MovieCard = ({ movie }) => {
	return <S.Container>
		<S.PosterContainer>
			<S.Poster src={movie?.poster} alt="movie image"/>
			<S.Rating>{movie?.rating}</S.Rating>
		</S.PosterContainer>
		<S.TitleContainer>
			<S.Title>{movie?.title}</S.Title>	
			<S.Year>{movie?.year}</S.Year>
		</S.TitleContainer>
		
	</S.Container>;
};

export default MovieCard;
