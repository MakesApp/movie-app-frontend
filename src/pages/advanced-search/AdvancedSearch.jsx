import React from "react";
import AdvancedFields from "../../components/advanced-search/AdvancedFields";
import AdvancedTitle from "../../components/advanced-search/AdvancedTitle";
import { useGetTopMoviesQuery } from "../../services/api/movieSlice";

export default function AdvancedSearch() {
	const { data: topMovies } = useGetTopMoviesQuery();
	return (
		<div>
			<AdvancedTitle></AdvancedTitle>
			<AdvancedFields topMovies={topMovies}></AdvancedFields>
		</div>
	);
}
