import React, { useState } from "react";
import { useSelector } from "react-redux";
import MovieList from "../../components/MovieList/MovieList";
import * as S from "./WatchLater.styles.js";

const WatchLater = () => {
	const [hideButton, setHideButton] = useState(true);
	const watchLater = useSelector((state) => state.userSlice.watchLater);

	return (
		<div>
			{<S.h2>My Movies List</S.h2>}
			<MovieList movies={watchLater} hideButton={hideButton}></MovieList>
		</div>
	);
};

export default WatchLater;
