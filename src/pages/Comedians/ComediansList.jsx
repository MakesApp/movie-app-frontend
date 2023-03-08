import ComedianCard from "./ComedianCard";
import * as S from "./ComedianList.styles";
import { useGetComediansQuery } from "../../../src/services/api/movieApi.js";

const ComediansList = () => {
	const {
		data: comedians = [
			{
				name: "George Carlin",
				role: "Stand-up comedian, actor, and writer",
				rank: 1,
				description:
					"George Carlin is a highly influential comedian known for his thought-provoking and boundary-pushing comedy. He has won multiple awards for his work, including several Primetime Emmy Awards.",
				image:
					"https://m.media-amazon.com/images/M/MV5BMTI4ODgzNTk0NV5BMl5BanBnXkFtZTcwNjU1MjY3MQ@@._V1_UY209_CR8,0,140,209_AL_.jpg",
			},
			{
				name: "Richard prior",
				role: "Stand-up comedian, actor, and writer",
				rank: 2,
				description:
					"Richard prior is a legendary comedian best known for his work on the TV show. He is widely regarded as one of the greatest comedians of all time.",
				image:
					"https://m.media-amazon.com/images/M/MV5BNGE3MWQ1MzMtNGY1OS00NDAyLThmZmYtMjVmZDQ0YWQzMzRhXkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_UX140_CR0,0,140,209_AL_.jpg",
			},
			{
				name: "Eddie Murphy",
				rank: 3,
				role: "Stand-up comedian, actor, and TV host",
				description:
					"Eddie Murphy is a comedian known for his dark and self-deprecating humor. He has released multiple successful stand-up specials and was the creator and star",
				image:
					"https://m.media-amazon.com/images/M/MV5BMTc0NDQzODAwNF5BMl5BanBnXkFtZTYwMzUzNTk3._V1_UY209_CR4,0,140,209_AL_.jpg",
			},
			{
				name: "Chris Rock",
				role: "Stand-up comedian, actor, writer, and producer",
				rank: 4,
				description:
					"Chris Rock is a comedian and TV host best known for his show, The Chris Rock Show. He has won multiple awards for his work, including several Daytime Emmy Awards.",
				image:
					"https://m.media-amazon.com/images/M/MV5BMTEyNjM5MjgyNzdeQTJeQWpwZ15BbWU3MDAzMzUyODc@._V1_UX140_CR0,0,140,209_AL_.jpg",
			},
			{
				name: "Wanda Sykes",
				role: "Stand-up comedian, actress",
				rank: 5,
				description:
					"Wanda Sykes has been called one of the funniest stand-up comics by her peers and ranks among Entertainment Weekly's 25 Funniest People in America. Her smart-witted stand-up has sent her career in many different areas.",
				image:
					"https://m.media-amazon.com/images/M/MV5BMTkwNTUxNzYyNV5BMl5BanBnXkFtZTcwNzgyNjQ3MQ@@._V1_UX140_CR0,0,140,209_AL_.jpg",
			},
			{
				name: "Ray Romano",
				role: "Stand-up comedian, actor and writer",
				rank: 6,
				description:
					"Ray Romano grew up in Forest Hills, Queens. He performed in the NYC comedy club circuit before landing a guest spot on The Letterman Show. It was here that he propelled his TV show Everybody Loves Raymond.He was also the voice of the Mammoth in the extremely successful Ice Age Series Movies.",
				image:
					"https://m.media-amazon.com/images/M/MV5BMTM4NzA4ODQxNV5BMl5BanBnXkFtZTYwMDA5Mjk1._V1_UY209_CR2,0,140,209_AL_.jpg",
			},
			{
				name: "Andy Kaufman",
				role: "Stand-up comedian, actor",
				rank: 7,
				description:
					"Referred to by some as a dadaistic comedian, Andy Kaufman took comedy and performance art to the edges of irrationality and blurred the dividing line between reality and imagination.",
				image:
					"https://m.media-amazon.com/images/M/MV5BMTI1NjQ3Njc1N15BMl5BanBnXkFtZTYwMTA3NTU2._V1_UX140_CR0,0,140,209_AL_.jpg",
			},
			{
				name: "Jim Carrey",
				role: "Actor",
				rank: 8,
				description:
					"Jim Carrey, Canadian-born and a U.S. citizen since 2004, is an actor and producer famous for his rubbery body movements and flexible facial expressions. The two-time Golden Globe-winner rose to fame as a cast member of the Fox sketch comedy In Living Color (1990) but leading roles in Ace Ventura",
				image:
					"https://m.media-amazon.com/images/M/MV5BMTQwMjAwNzI0M15BMl5BanBnXkFtZTcwOTY1MTMyOQ@@._V1_UY209_CR15,0,140,209_AL_.jpg",
			},
			{
				name: "Dave Chappelle",
				role: "Stand-up comedian, actor",
				rank: 9,
				description:
					"Dave Chappelle's career started while he was in high school at Duke Ellington School of the Arts in Washington, DC where he studied theatre arts. At the age of 14, he began performing stand-up comedy in nightclubs. Shortly after graduation, he moved to New York City",
				image:
					"https://m.media-amazon.com/images/M/MV5BOTIyMjgzMjczNV5BMl5BanBnXkFtZTYwNjM4NzUz._V1_UY209_CR4,0,140,209_AL_.jpg",
			},
			{
				name: "Ellen DeGeneres",
				role: "Actress",
				rank: 10,
				description:
					"Emmy-winning talk show host Ellen Lee DeGeneres was born in Metairie, Louisiana, a New Orleans suburb. DeGeneres is host of the daytime talk show, The Ellen DeGeneres Show (2003)",
				image:
					"https://m.media-amazon.com/images/M/MV5BNDAwMzAyNDEzMV5BMl5BanBnXkFtZTcwMDU3MTAxMw@@._V1_UY209_CR8,0,140,209_AL_.jpg",
			},
		],
		error,
		isFetching,
	} = useGetComediansQuery;
	console.log(comedians);
	if (isFetching) {
		return <div>Loading...</div>;
	}
	if (error) {
		return <div>An error occurred: {error}</div>;
	}
	return (
		<S.Container>
			<S.Title>Top 10 Comedians</S.Title>
			{comedians?.map((comedian) => {
				return <ComedianCard key={comedian.rank} comedian={comedian} />;
			})}
		</S.Container>
	);
};

export default ComediansList;
