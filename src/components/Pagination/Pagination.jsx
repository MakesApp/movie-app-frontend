import { Link } from "react-router-dom";
import { MOVIES_PER_PAGE } from "./constants";
import * as S from "./Pagination.styles";
const Pagination = ({ totalPage, pageNumber, path }) => {
	return (
		<S.Container>
			<Link to={`${path}/${parseInt(pageNumber) - 1}`}>
				<S.Icon
					disabled={parseInt(pageNumber) - 1 <= 0}
					className='fa-solid fa-angles-left'
				></S.Icon>
				{/* <button disabled={parseInt(pageNumber) - 1 <= 0}>Previous</button> */}
			</Link>
			{[...Array(Math.ceil(totalPage / MOVIES_PER_PAGE))].map((x, i) => (
				<S.PageLink
					key={i}
					isSelected={parseInt(pageNumber) - 1 === i}
					to={`${path}/${i + 1}`}
				>
					{i + 1}
				</S.PageLink>
			))}
			<Link to={`${path}/${parseInt(pageNumber) + 1}`}>
				<S.Icon
					disabled={parseInt(pageNumber) + 1 > Math.ceil(totalPage / 10)}
					className='fa-solid fa-angles-right'
				></S.Icon>
				{/* <button disabled={parseInt(pageNumber) + 1 > Math.ceil(totalPage / 10)}>
					Next
				</button> */}
			</Link>
		</S.Container>
	);
};

export default Pagination;
