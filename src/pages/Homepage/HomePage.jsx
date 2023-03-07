import { useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import {
	useGetLatestMoviesQuery,
	useGetRandomMoviesQuery,
	useGetTopMoviesQuery,
} from "../../services/api/movieSlice";
import * as S from "./HomePage.styles";
import Spinner from "../../components/Spinner/Spinner";
import Carousel from "../../components/Carousel/Carousel";

const HomePage = () => {
	const { data: latestMovies, isFetching: latestFetching } =
		useGetLatestMoviesQuery();
	const { data: randomMovies, isFetching: randomFetching } =
		useGetRandomMoviesQuery();
	const { data: topMovies, isFetching: topFetching } = useGetTopMoviesQuery();
	const [sortBy, setSortBy] = useState("latest");
	const handleOnClick = (value) => {
		setSortBy(value);
	};
	const isFetching = latestFetching || topFetching||randomFetching;

	return (
		<S.Container >
			<S.CarouselWrapper>
				<Carousel data={randomMovies}/>
			</S.CarouselWrapper>
			<S.HeadersContainer>
				<S.Img src='/img/logo.png' alt='' />
				<br />
			</S.HeadersContainer>

			<S.ButtonsContainer>
				<S.Button
					isSelected={sortBy === "latest"}
					onClick={() => handleOnClick("latest")}
				>
					Latest Movies
				</S.Button>
				<S.Button
					isSelected={sortBy === "top"}
					onClick={() => handleOnClick("top")}
				>
					Top Movies{" "}
				</S.Button>
			</S.ButtonsContainer>

			{isFetching ? (
				<Spinner />
			) : (
				<>
					{sortBy === "latest" && latestMovies && (
						<MovieList movies={latestMovies} />
					)}
					{sortBy === "top" && topMovies && <MovieList movies={topMovies} />}
				</>
			)}
		</S.Container>
	);
};

export default HomePage;
