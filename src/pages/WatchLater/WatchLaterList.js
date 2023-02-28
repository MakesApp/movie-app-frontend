import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeMovie } from "../../services/redux/userSlice";
import WatchLater from "./WatchLater";
import * as S from "./WatchLater.styles.js";

const WatchLaterList = () => {
	const dispatch = useDispatch();
	const watchLater = useSelector((state) => state.userSlice.watchLater);
	const [isWatchLaterEmpty, setIsWatchLaterEmpty] = useState(true);

	const handleRemoveMovie = (id) => {
		dispatch(removeMovie(id));
	};

	if (watchLater.length > 0 && isWatchLaterEmpty) {
		setIsWatchLaterEmpty(() => false);
	}

	return (
		<div>
			{isWatchLaterEmpty ? (
				<S.P>Your watch later list is empty.</S.P>
			) : (
				<>
					<WatchLater movies={watchLater} />
					{watchLater.map((movie) => (
						<S.RemoveButton
							key={movie.id}
							onClick={() => handleRemoveMovie(movie.id)}
						>
							-
						</S.RemoveButton>
					))}
				</>
			)}
		</div>
	);
};

export default WatchLaterList;
