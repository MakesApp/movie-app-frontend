import { useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import {
	useAddMovieToWatchLaterMutation,
	useGetLatestMoviesQuery,
	useGetTopMoviesQuery,
} from "../../services/api/movieApi";
import * as S from "./HomePage.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToWatchLater } from "../../services/redux/userSlice";
import {  useNavigate } from "react-router-dom";
import { LOGIN } from "../../routes/constants";
import MovieCard from "../../components/MovieCard/MovieCard";


const HomePage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector((state) => state.userSlice);
	const watchLaterList=user?.watchLater;
	

	const { data: latestMovies } = useGetLatestMoviesQuery();
	const { data: topMovies } = useGetTopMoviesQuery();
	const [addMovieToWatchLater]=useAddMovieToWatchLaterMutation(user?.id);

	const [sortBy, setSortBy] = useState("latest");

	const handleAddToWatchLater = async(movieId) => {
		if(!user) navigate(LOGIN);
		if (!watchLaterList.find((id) => id === movieId.toString())) {
			await addMovieToWatchLater({userId:user._id ,movieId:movieId.toString()});
			dispatch(addToWatchLater(movieId.toString()));
		}
	};

	const renderMovies=()=>{
		const movies=sortBy === "latest" ? latestMovies:topMovies;
		const isMovieInWatchLater=(movieId)=>watchLaterList?.find(m=>m===movieId.toString());
		return (
			<MovieList >
				{
					movies?.map(movie=>{
						return 	<MovieCard
							key={movie.id}
							movie={movie}
						>
							{
								<S.AddButton
									// disabled={isAddedToWatchLater}
									onClick={() => handleAddToWatchLater(movie.id)}
								>
									<FontAwesomeIcon
										icon={isMovieInWatchLater(movie.id)? faCheck:faPlus}
										size='lg'
									/>
								</S.AddButton>
						
							}
						</MovieCard>;
					})
				}
		
			
			</MovieList>
		);
	};
	const handleOnClick = (value) => {
		setSortBy(value);
	};
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
					Top Movies
				</S.Button>
			</S.ButtonsContainer>
			{renderMovies()}
		</div>
	);
};

export default HomePage;
