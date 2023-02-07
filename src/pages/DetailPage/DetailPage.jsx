import {
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
	poster: 'lorem',
	title: 'title',
	year: 2000,
	genre: [],
	director: '',
	writers: [],
	runTime: 90,
	plot: 'plot',
	tagLine: 'red',
	language: 'All',
};
const DetailPage = () => {
	return (
		<>
			<Poster>{data.poster}</Poster>
			<Title>{data.title}</Title>
			<Year>{data.year}</Year>
			<Genre>{data.genre}</Genre>
			<Director>{data.director}</Director>
			<Writers>{data.writers}</Writers>
			<RunTime>{data.runTime}</RunTime>
			<Plot>{data.plot}</Plot>
			<TagLine>{data.tagLine}</TagLine>
			<Language>{data.language}</Language>
		</>
	);
};
export default DetailPage;
