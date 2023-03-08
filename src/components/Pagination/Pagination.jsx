import { Link } from "react-router-dom";
import { MOVIES_PER_PAGE } from "./constants";
import * as S from "./Pagination.styles";
const Pagination = ({ totalPage, pageNumber, path }) => {
	return (
		<S.Container>
			<Link to={`${path}/${parseInt(pageNumber) - 1}`}>
				<S.Icon
					className='fa-solid fa-angles-left'
					hidden={parseInt(pageNumber) - 1 <= 0}
				></S.Icon>
			</Link>
			{[...Array(Math.ceil(totalPage / MOVIES_PER_PAGE))].map((x, i) => (
				<S.PageLink
					key={i}
					isselected={parseInt(pageNumber) - 1 === i ? "true" : "false"}
					to={`${path}/${i + 1}`}
				>
					{i + 1}
				</S.PageLink>
			))}
			<Link to={`${path}/${parseInt(pageNumber) + 1}`}>
				<S.Icon
					className='fa-solid fa-angles-right'
					hidden={parseInt(pageNumber) + 1 > Math.ceil(totalPage / 10)}
				></S.Icon>
			</Link>
		</S.Container>
	);
};

export default Pagination;
