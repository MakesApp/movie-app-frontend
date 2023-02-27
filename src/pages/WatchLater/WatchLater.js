import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieList from "../../components/MovieList/MovieList";
import { addMovie, removeMovie } from "../../services/redux/userSlice";

const WatchLater = ({ id, title, poster }) => {
	const dispatch = useDispatch();
	const [hideButton, setHideButton] = useState(true);
	const watchLater = useSelector((state) => state.userSlice.watchLater);
	console.log(watchLater);
	const handleWatchLater = () => {
		const movie = { id, title, poster };
		if (watchLater.some((m) => m.id === movie.id)) {
			dispatch(removeMovie(movie.id));
		} else {
			dispatch(addMovie(movie));
		}
	};



	return (
		<div>
			{<h2>Watch Later List</h2>}
			<MovieList movies={watchLater} hideButton={hideButton} ></MovieList>
		</div>
	);
};

export default WatchLater;
