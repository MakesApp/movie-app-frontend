import React, { useState } from "react";
import { useSelector } from "react-redux";
import MovieList from "../../components/MovieList/MovieList";
import * as S from "./WatchLater.styles.js";

const WatchLater = () => {
	const [hideButton, setHideButton] = useState(true);
	const watchLater = useSelector((state) => state.userSlice.watchLater);
	
	const isWatchLaterEmpty = watchLater.length === 0;

	return (
		<div>
			<S.Title>My Movies List</S.Title>
			{isWatchLaterEmpty ? (
				<S.Message>Your watch later list is empty.</S.Message>
			) : (
				<MovieList movies={watchLater} hideButton={hideButton} />
			)}
		</div>
	);
};

export default WatchLater;
