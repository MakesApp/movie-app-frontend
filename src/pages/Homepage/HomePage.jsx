import { useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import {
	useGetLatestMoviesQuery,
	useGetTopMoviesQuery,
} from "../../services/api/movieSlice";
import * as S from "./HomePage.styles";
import Spinner from "../../components/Spinner/Spinner";

const HomePage = () => {
	const { data: latestMovies, isFetching: latestFetching } =
		useGetLatestMoviesQuery();
	const { data: topMovies, isFetching: topFetching } = useGetTopMoviesQuery();
	const [sortBy, setSortBy] = useState("latest");
	const handleOnClick = (value) => {
		setSortBy(value);
	};
	const isFetching = latestFetching || topFetching;

	return (
		<div style={{ minHeight: "100vh" }}>
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
		</div>
	);
};

export default HomePage;
