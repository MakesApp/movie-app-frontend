import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../../components/MovieCard/MovieCard";
import MovieList from "../../components/MovieList/MovieList";
import {
	useDeleteMovieFromWatchLaterMutation,
	useGetWatchLaterMoviesQuery,
} from "../../services/api/movieApi";
import * as S from "./WatchLater.styles.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { removeFromWatchLater } from "../../services/redux/userSlice";

const WatchLater = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.userSlice);
	const { data: watchLaterMovies } = useGetWatchLaterMoviesQuery(user?._id, {
		skip: !user?._id,
	});
	const [deleteFromWatchLater] = useDeleteMovieFromWatchLaterMutation();
	const isWatchLaterEmpty = watchLaterMovies?.length === 0;

	const handleRemoveWatchLater = async (movieId) => {
		await deleteFromWatchLater({
			userId: user?._id,
			movieId: movieId.toString(),
		});
		dispatch(removeFromWatchLater(movieId.toString()));
	};
	return (
		<div>
			<S.Title>My Movies List</S.Title>
			{isWatchLaterEmpty ? (
				<S.Message>Your watch later list is empty.</S.Message>
			) : (
				<MovieList>
					{watchLaterMovies?.map((movie) => (
						<MovieCard key={movie.id} movie={movie}>
							<S.RemoveButton onClick={() => handleRemoveWatchLater(movie.id)}>
								<FontAwesomeIcon icon={faTrash} size='lg' />
							</S.RemoveButton>
						</MovieCard>
					))}
				</MovieList>
			)}
		</div>
	);
};

export default WatchLater;
