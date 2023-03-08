import { useState } from "react";
import { useSelector } from "react-redux";
import * as S from "./Navbar.styles";
import SearchBar from "../SearchBar/SearchBar";
function Navbar() {
	const user = useSelector((state) => state.userSlice);

	return (
		<S.NavbarContainer>
			<S.LeftContainer>
				<S.NavbarLinkContainer>
					<S.NavbarLink to='/'> Home</S.NavbarLink>
					<S.NavbarLink to='/AdvancedSearch'> Advanced Search</S.NavbarLink>
					<S.NavbarLink to='/top-comedians'>Top 100 Comedians</S.NavbarLink>
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
