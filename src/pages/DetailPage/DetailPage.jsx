import {
	Container,
	Poster,
	Title,
	Year,
	Genre,
	Director,
	Writers,
	RunTime,
	Plot,
	TagLine,
	Language,
} from './detailPage.style';

const data = {
	Poster: 'lorem',
	Title: 'title',
	Year: 2000,
	Genre: [1, 2, 3],
	Director: 'hary',
	Writers: [5, 6, 7],
	RunTime: 90,
	Plot: 'plot',
	TagLine: 'red',
	Language: 'All',
};
function DetailPage() {
	return (
		<>
			<Container>
				<Poster />
				<Title>{data.Title}</Title>
				<Year>{data.Year}</Year>
				<Genre>
					<strong>Genre: </strong>
					{data.Genre}
				</Genre>
				<Director>
					<strong>Director: </strong>
					{data.Director}
				</Director>
				<Writers>
					<strong>Writers: </strong>
					{data.Writers}
				</Writers>
				<RunTime>
					<strong>Runtime: </strong>
					{data.RunTime} minutes
				</RunTime>
				<Plot>
					<strong>Plot: </strong>
					{data.Plot}
				</Plot>
				<TagLine>
					<strong>Tagline: </strong>
					{data.TagLine}
				</TagLine>
				<Language>
					<strong>Language: </strong>
					{data.Language}
				</Language>
			</Container>
		</>
	);
}
export default DetailPage;
