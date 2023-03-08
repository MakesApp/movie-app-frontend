import { useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import MovieCard from "../../components/MovieCard/MovieCard";
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
	const { search: locationQueries } = location;
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
		navigate(`/advancedSearch?${queryParams}`);
	};
	const handlePaginationClick = (event) => {
		const queries = { ...advancedFields, page: event.selected + 1 };
		const queryParams = new URLSearchParams(queries).toString();
		navigate(`/advancedSearch?${queryParams}`);
	};
	const { data } = useGetAdvancedSearchQuery(locationQueries, {
		skip: !locationQueries,
	});
	const { movies, totalPages } = data || {};
	return (
		<S.Container>
			<AdvancedTitle></AdvancedTitle>
			<AdvancedFields setAdvancedFields={setAdvancedFields}></AdvancedFields>
			<S.Button onClick={handleSearch}>Search</S.Button>;
			{movies && (
				<>
					<Pagination
						initialPage={locationQueries["page"]}
						handleOnClick={handlePaginationClick}
						itemsPerPage={totalPages}
					/>
					<MovieList>
						{movies?.map((movie) => (
							<MovieCard key={movie.id} movie={movie}></MovieCard>
						))}
					</MovieList>
				</>
			)}
		</S.Container>
	);
}
