import ComedianCard from "./ComedianCard";
import * as S from "./ComedianCard.styles";
import { useGetComediansQuery } from "../../../src/services/api/movieSlice.js";

const ComediansList = () => {
	const { data: comedians = [], error, isFetching } = useGetComediansQuery;
	if (isFetching) {
		return <div>Loading...</div>;
	}
	if (error) {
		return <div>An error occurred: {error}</div>;
	}
	return (
		<S.Container>
			<S.Title>Top 100 Comedians</S.Title>
			{ComediansList.map((comedian) => {
				<ComedianCard key={comedian.rank} comedian={comedian} />;
			})}
		</S.Container>
	);
};

export default ComediansList;
