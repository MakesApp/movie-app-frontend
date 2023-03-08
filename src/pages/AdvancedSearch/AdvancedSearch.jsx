import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import MovieCard from "../../components/MovieCard/MovieCard";
import MovieList from "../../components/MovieList/MovieList";
import Pagination from "../../components/Pagination/Pagination";
import { useGetAdvancedSearchQuery } from "../../services/api/movieSlice";
import AdvancedFields from "../AdvancedSearch/components/AdvancedFields/AdvancedFields";
import AdvancedTitle from "../AdvancedSearch/components/AdvancedTitle/AdvancedTitle";
import * as S from "./AdvancedSearch.style";
export default function AdvancedSearch() {
	const navigate = useNavigate();
	const location = useLocation();
	const [isClicked, setIsClicked] = useState(false);
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
	useEffect(() => {
		const obj = {};
		const urlSearchParams = new URLSearchParams(locationQueries);
		Object.entries(Object.fromEntries(urlSearchParams.entries())).map(
			([key, value]) => (obj[key] = value)
		);
		setAdvancedFields(obj);
	}, [location]);

	const handleSearch = () => {
		const queryParams = new URLSearchParams(advancedFields).toString();
		setIsClicked(true);
		navigate(`/advancedSearch?${queryParams}`);
	};
	const handlePaginationClick = (event) => {
		const queries = { ...advancedFields, page: event.selected + 1 };
		const queryParams = new URLSearchParams(queries).toString();
		navigate(`/advancedSearch?${queryParams}`);
	};
	const areQueriesEmpty = Object.entries(advancedFields)
		.filter(([key, value]) => key !== "page")
		.every(([key, value]) => !value);

	const { data } = useGetAdvancedSearchQuery(locationQueries, {
		skip: areQueriesEmpty,
	});
	const { movies, totalPages } = data || {};
	const urlArr = locationQueries.split("=");
	const page = urlArr[urlArr.length - 1];
	return (
		<S.Container>
			<AdvancedTitle></AdvancedTitle>
			<AdvancedFields setAdvancedFields={setAdvancedFields}></AdvancedFields>
			<S.Button onClick={handleSearch}>Search</S.Button>;
			{movies && (
				<>
					<Pagination
						initialPage={page + 1}
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
