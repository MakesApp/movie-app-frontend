import { Link } from "react-router-dom";
import { MOVIES_PER_PAGE } from "./constants";
import PageLink from "./Pagination.styles";
const Pagination = ({ totalPage, pageNumber, path }) => {
	return (
		<>
			<Link to={`${path}/${parseInt(pageNumber) - 1}`}>
				<button disabled={parseInt(pageNumber) - 1 <= 0}>Previous</button>
			</Link>
			{[...Array(Math.ceil(totalPage / MOVIES_PER_PAGE))].map((x, i) => (
				<PageLink
					key={i}
					isSelected={parseInt(pageNumber) - 1 === i}
					to={`${path}/${i + 1}`}
				>
					{i + 1}
				</PageLink>
			))}
			<Link to={`${path}/${parseInt(pageNumber) + 1}`}>
				<button disabled={parseInt(pageNumber) + 1 > Math.ceil(totalPage / 10)}>
					Next
				</button>
			</Link>
		</>
	);
};

export default Pagination;
