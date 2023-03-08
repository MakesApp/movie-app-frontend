import styled from "styled-components/macro";
import ReactPaginate from "react-paginate";

export const MyPaginate = styled(ReactPaginate).attrs({
	// You can redefine classes here, if you want.
	activeClassName: "active", // default to "selected"
})`
	display: flex;
	flex-direction: row;
	list-style-type: none;
	padding: 2rem 0;
	column-gap: 5px;

	li a {
		border-radius: 7px;
		padding: 0.1rem 1rem;
		color: white;
		border: gray 1px solid;
		cursor: pointer;
	}
	li.previous a,
	li.next a,
	li.break a {
		border-color: transparent;
	}
	li.active a {
		background-color: #0366d6;
		border-color: transparent;
		color: white;
		min-width: 32px;
	}
	li.disabled a {
		color: grey;
	}
	li.disable,
	li.disabled a {
		cursor: default;
	}
`;
