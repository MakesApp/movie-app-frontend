import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, removeMovie } from "../../services/redux/userSlice";

const WatchLater = ({ id, title, poster }) => {
	const dispatch = useDispatch();
	const watchLater = useSelector((state) => state.watchLater);

	const handleWatchLater = () => {
		const movie = { id, title, poster };
		if (watchLater.some((m) => m.id === movie.id)) {
			dispatch(removeMovie(movie.id));
		} else {
			dispatch(addMovie(movie));
		}
	};

	const isWatchedLater = watchLater.some((m) => m.id === id);

	return (
		<div>
			<h2>{title}</h2>
			<img src={poster} alt={title} />
			<button onClick={handleWatchLater}>
				{isWatchedLater ? "Remove from watch later" : "Add to watch later"}
			</button>
		</div>
	);
};

export default WatchLater;
