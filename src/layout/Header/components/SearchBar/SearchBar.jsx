import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as S from "./SearchBar.styles";
const SearchBar = () => {
	const [term, setTerm] = useState("");
	const dispatch = useDispatch();
	const submitHandler = (e) => {
		e.preventDefault();
		if (term === "") return alert("Please enter search term!");
	};
	return (
		<S.searchBar>
			<S.Form onSubmit={submitHandler}>
				<S.Input
					type='text'
					value={term}
					placeholder='Search Movies or Shows'
					onChange={(e) => setTerm(e.target.value)}
				/>
				<S.Button type='submit'>
					{/* <i className="fa fa-search"></i> */}
				</S.Button>
			</S.Form>
		</S.searchBar>
	);
};

export default SearchBar;
