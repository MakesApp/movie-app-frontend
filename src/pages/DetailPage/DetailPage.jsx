import { useParams } from "react-router-dom";
import { useGetMovieDetailQuery } from "../../services/api/movieSlice";
import * as S from "./detailPage.style";
import ReviewForm from "../../components/Reviews/Reviews";

const DetailPage = () => {
	const params = useParams();
	const { id } = params;
	const { data: movieDetail } = useGetMovieDetailQuery(id);

	const {
		poster,
		director,
		genre,
		title,
		year,
		writers,
		runTime,
		plot,
		tagLine,
		language,
	} = movieDetail || {};

	let displayGenre = genre;
	if (Array.isArray(genre)) displayGenre = genre.join(" , ");
	return (
		<>
			<S.Container>
				<S.FlexRow>
					<div className='leftSide'>
						<S.Title>
							<strong>Title: </strong>
							{title}
						</S.Title>
						<S.InfoP>
							<strong>Genre: </strong>
							{displayGenre ? displayGenre : "N/A"}
						</S.InfoP>
						<S.InfoP>
							<strong>Year: </strong>
							{year ? year : "N/A"}
						</S.InfoP>
						<S.InfoP>
							<strong>Language: </strong>
							{language ? language : "N/A"}
						</S.InfoP>
						<S.InfoP>
							<strong>Director: </strong>
							{director ? director : "N/A"}
						</S.InfoP>
						<S.InfoP>
							<strong>Writers: </strong>
							{writers ? writers : "N/A"}
						</S.InfoP>
						<S.InfoP>
							<strong>Plot: </strong>
							{plot ? plot : "N/A"}
						</S.InfoP>
						<S.InfoP>
							<strong>Runtime: </strong>
							{runTime ? runTime : "N/A"}
						</S.InfoP>
						<S.InfoP>
							<strong>Tagline: </strong>
							{tagLine ? tagLine : "N/A"}
						</S.InfoP>
					</div>
					<div className='rightSide'>
						{poster && (
							<S.Poster src={"https://image.tmdb.org/t/p/w185/" + poster} />
						)}
					</div>
				</S.FlexRow>
			</S.Container>
		</>
	);
};
export default DetailPage;
