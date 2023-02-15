import MovieList from "../../components/MovieList/MovieList";
import { useGetLatestMoviesQuery } from "../../services/api/movieSlice";

const HomePage=() =>{
	const {data:latestMovies}=useGetLatestMoviesQuery();

	return <>
		{latestMovies&&<MovieList movies={latestMovies}/> }
	</>;
};

export default HomePage;
