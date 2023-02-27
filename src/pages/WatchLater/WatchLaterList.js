import { useSelector, useDispatch } from "react-redux";
import { clearList, removeMovie } from "../../../../services/redux/userSlice";
import MovieList from "../../components/MovieList/MovieList";

function WatchLaterList() {
	const watchLaterList = useSelector((state) => state.userSlice.watchLater);
	const dispatch = useDispatch();

	const handleRemoveFromWatchLater = (movie) => {
		dispatch(removeMovie(movie));
	};

	const handleClearList = () => {
		dispatch(clearList());
	};

	return (
		<div>
			<h2>Watch Later List</h2>
			{watchLaterList.length > 0 ? (
				<>
					<button onClick={handleClearList}>Clear List</button>
					
					<ul>
						{watchLaterList.map((movie) => (
							<li key={movie.id}>
								{movie.title}{" "}
								<button onClick={() => handleRemoveFromWatchLater(movie)}>
									Remove
								</button>
							</li>
						))}
					</ul>
				</>
			) : (
				<p>Your watch later list is empty.</p>
			)}
		</div>
	);
}
export default WatchLaterList;
