import { useState } from "react";
import { useSelector } from "react-redux";
import * as S from "./Navbar.styles";
import SearchBar from "../SearchBar/SearchBar";
import { ADVANCEDSEARCH } from "../../../../routes/constants";
function Navbar() {
	const user = useSelector((state) => state.userSlice);

	return (
		<S.NavbarContainer>
			<S.LeftContainer>
				<S.NavbarLinkContainer>
					<S.NavbarLink to='/'> Home</S.NavbarLink>
					<S.NavbarLink to={ADVANCEDSEARCH}>Advanced Search</S.NavbarLink>
					<S.NavbarLink to='/popular-actors'> Popular Actors</S.NavbarLink>
					<S.NavbarLink to='/watchlater'> Watch Later</S.NavbarLink>
				</S.NavbarLinkContainer>
			</S.LeftContainer>
			<S.RightContainer>
				{!user && <S.NavbarLink to='/login'>Login</S.NavbarLink>}
				{user && (
					<S.Logout href={process.env.REACT_APP_API_URL + "api/logout"}>
						Logout
					</S.Logout>
				)}
			</S.RightContainer>
			<SearchBar></SearchBar>
		</S.NavbarContainer>
	);
}

export default Navbar;
