import * as S from "./detailPage.style";

const DetailPage = ({ movie }) => {
	const {
		poster = "",
		title = "title",
		year = 2000,
		genre = [],
		director = "benny",
		writers = [],
		runTime = "",
		plot = "",
		tagLine = "asa",
		language = "nigerian",
	} = movie;
	return (
		<>
			<S.Container>
				<S.Poster
					src={
						"https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					}
				/>
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
