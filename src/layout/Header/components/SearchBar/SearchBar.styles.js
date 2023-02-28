import styled from "styled-components/macro";
import { Link } from "react-router-dom";
export const SearchBar = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	gap: 0.2rem;
	overflow: visible;
	/* height: 3rem; */
`;
export const SearchBarForm = styled.form`
	display: flex;
	gap: 0.5rem;
	align-items: center;
`;
export const SearchBarInput = styled.input`
	width: 20rem;
	height: 1.5rem;
	font-size: 15px;
	border-radius: 5px;
	outline: none;
	border: none;
	padding: 0.3rem;
	color: whitesmoke;
	background-color: rgb(36, 35, 35);
	border: 1px white solid;
`;
export const SearchBarSubmit = styled.input`
	all: unset;
	background-color: white;
	color: whitesmoke;
	background-color: rgb(53, 53, 53);
	border: 1px whitesmoke solid;
	border-radius: 3px;
	text-align: center;
	width: 5rem;
	height: 2rem;
	cursor: pointer;
	font-weight: 500;
	/* font-size: 0.9rem; */
	transition: all 0.15s ease;
`;
export const SearchBarSuggestions = styled.div`
	display: flex;
	/* gap: 0.5%; */
	flex-direction: column;
	position: absolute;
	top: 100%;
	left: 0;
	z-index: 2;
`;
export const SearchBarSuggestion = styled(Link)`
	background-color: rgb(36, 35, 35);
	border-radius: 3px;
	width: 20rem;
	height: 2rem;
	text-align: center;
	text-decoration: none;
	/* color: black; */
	color: whitesmoke;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 0.2rem 0;
	padding-right: 0.2rem;
	align-items: center;
	z-index: 2;
	font-size: 12px;
`;
export const MovieImage = styled.img`
	width: 1.8vw;
	overflow: hidden;
	height: 80%;
	border-radius: 20%;
	align-items: center;
	justify-content: center;
	margin-left: 2%;
	border: 1px gray solid;
`;

export const MovieName = styled.b`
	font-weight: 500;
	font-size: 14px;
`;
