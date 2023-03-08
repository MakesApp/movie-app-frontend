import { useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import { MOVIES_PER_PAGE } from "../../components/Pagination/constants";
import Pagination from "../../components/Pagination/Pagination";
import { useGetAdvancedSearchQuery } from "../../services/api/movieSlice";
import AdvancedFields from "../AdvancedSearch/components/AdvancedFields/AdvancedFields";
import AdvancedTitle from "../AdvancedSearch/components/AdvancedTitle/AdvancedTitle";
import * as S from "./AdvancedSearch.style";
export default function AdvancedSearch() {
	const navigate = useNavigate();
	const location = useLocation();
	const params = useParams();
	const { page } = params;
	const { search: locationQueries } = location;
	const [isClicked, setIsClicked] = useState(false);
	const [advancedFields, setAdvancedFields] = useState({
		from: "",
		to: "",
		minimumRating: "",
		minimumVotes: "",
		minimumRuntime: "",
		genre: "",
		page: "",
	});

	const handleSearch = () => {
		const queryParams = new URLSearchParams(advancedFields).toString();
		navigate(`/advancedSearch/page/1?${queryParams}`);
		setIsClicked(true);
	};
	const { data: searchedMovies } = useGetAdvancedSearchQuery(locationQueries);

	const movies = searchedMovies?.movieresult;
	return (
		<S.Container>
			<AdvancedTitle></AdvancedTitle>
			<AdvancedFields setAdvancedFields={setAdvancedFields}></AdvancedFields>
			<S.Button onClick={handleSearch}>Search</S.Button>;
			{movies && (
				<>
					<Pagination
						totalPage={movies?.length}
						pageNumber={page ?? "1"}
						path={`/advancedSearch/page/${page}${locationQueries}`}
					/>
					<MovieList
						movies={
							movies?.slice(
								(+page - 1) * MOVIES_PER_PAGE,
								+page * MOVIES_PER_PAGE - 1
							) || []
						}
					/>
				</>
			)}
		</S.Container>
	);
}
