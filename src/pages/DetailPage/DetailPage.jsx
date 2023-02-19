import { useParams } from "react-router-dom";
import { useGetMovieDetailQuery } from "../../services/api/movieSlice";
import * as S from "./detailPage.style";

const DetailPage = () => {
	const params=useParams();
	const {id}=params;
	const {data:movieDetail}=useGetMovieDetailQuery(id);

	const {
		poster ,
		title ,
		year ,
		genre,
		director ,
		writers ,
		runTime,
		plot,
		tagLine,
		language ,
	} = movieDetail;
	return (
		<>
			<S.Container>
				<S.Poster src={poster} />
				<S.Title>
					<strong>title: </strong>
					{title}
				</S.Title>
				<S.Genre>
					<strong>Genre: </strong>
					{genre}
				</S.Genre>
				<S.Year>
					<strong>year: </strong>
					{year}
				</S.Year>
				<S.Director>
					<strong>Director: </strong>
					{director}
				</S.Director>
				<S.Writers>
					<strong>Writers: </strong>
					{writers}
				</S.Writers>
				<S.RunTime>
					<strong>Runtime: </strong>
					{runTime} minutes
				</S.RunTime>
				<S.Plot>
					<strong>Plot: </strong>
					{plot}
				</S.Plot>
				<S.TagLine>
					<strong>Tagline: </strong>
					{tagLine}
				</S.TagLine>
				<S.Language>
					<strong>Language: </strong>
					{language}
				</S.Language>
			</S.Container>
		</>
	);
};
export default DetailPage;
