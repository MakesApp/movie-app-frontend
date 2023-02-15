import MovieList from "../../components/MovieList/MovieList";

const HomePage=() =>{
	const data=[{
		poster:"https://images.pexels.com/photos/3526022/pexels-photo-3526022.jpeg?auto=compress&cs=tinysrgb&w=800",
		title:"Movie 1",
		year:"2020",
		rating:"8.3"
	},{		poster:"https://images.pexels.com/photos/3526022/pexels-photo-3526022.jpeg?auto=compress&cs=tinysrgb&w=800",
	},{		poster:"https://images.pexels.com/photos/3526022/pexels-photo-3526022.jpeg?auto=compress&cs=tinysrgb&w=800",
	},{		poster:"https://images.pexels.com/photos/3526022/pexels-photo-3526022.jpeg?auto=compress&cs=tinysrgb&w=800",
	},{		poster:"https://images.pexels.com/photos/3526022/pexels-photo-3526022.jpeg?auto=compress&cs=tinysrgb&w=800",
	},{		poster:"https://images.pexels.com/photos/3526022/pexels-photo-3526022.jpeg?auto=compress&cs=tinysrgb&w=800",
	}];
	return <>
		<MovieList movies={data}/> 
	</>;
};

export default HomePage;
