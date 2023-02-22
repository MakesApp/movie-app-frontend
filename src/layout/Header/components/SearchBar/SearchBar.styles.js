import styled from "styled-components/macro";
import { Link } from "react-router-dom";
export const searchBar = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.2rem;
	overflow: visible;
	height: 3rem;
`;
export const SearchBarForm = styled.form`
	display: flex;
	gap: 0.5rem;
	align-items: center;
`;
export const searchBarInput = styled.input`
	width: 20rem;
	height: 1.5rem;
	font-size: 15px;
	border-radius: 5px;
	outline: none;
	border: none;
	padding: 0.3rem;
`;
export const searchBarSubmit = styled.input`
	all: unset;
	background-color: white;
	color: blue;
	border-radius: 3px;
	text-align: center;
	width: 5rem;
	height: 2rem;
	cursor: pointer;
	font-weight: 500;
	font-size: 0.9rem;
	transition: all 0.15s ease;
`;
export const searchBarSuggestions = styled.div`
	display: flex;
	gap: 0.2rem;
	flex-direction: column;
`;
export const searchBarSuggestion = styled(Link)`
	background-color: white;
	border: 2px solid rgb(0, 0, 56);
	border-radius: 3px;
	width: 20rem;
	height:2rem;
	text-align: center;
	text-decoration: none;
	color: black;
	align-items: center
	justify-content: center;
	font-size:12px;
`;
export const movieImage=styled.img`
width:1.8vw;
hight:1vh;
align-items: center;
justify-content: center;

`;
