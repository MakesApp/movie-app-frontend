import {
	useGetAdvancedSearchQuery,
	useGetAllMoviesQuery,
} from "../../../../services/api/movieSlice";

import * as S from "./SearchBtn.styles";

export default function SearchBtn({ advancedFields }) {
	const { data: searchedMovies } = useGetAdvancedSearchQuery(
		"?" + new URLSearchParams(advancedFields).toString()
	);
	console.log(searchedMovies);
	const searchMovies = () => {};
	return (
		<S.Container>
			<S.Button onClick={searchMovies}>Search</S.Button>;
		</S.Container>
	);
}
