import { useState } from "react";
import { useSelector } from "react-redux";
import * as S from "./Navbar.styles";
import SearchBar from "../SearchBar/SearchBar";
function Navbar() {
	const [extendNavbar, setExtendNavbar] = useState(false);
	const user = useSelector((state) => state.userSlice);

	return (
		<S.NavbarContainer extendNavbar={extendNavbar}>
			<S.NavbarInnerContainer>
				<S.LeftContainer>
					<S.NavbarLinkContainer>
						<S.NavbarLink to='/'> Home</S.NavbarLink>
						<S.NavbarLink to='/AdvancedSearch'> Advanced Search</S.NavbarLink>
						<S.NavbarLink to='/popular-actors'> Popular Actors</S.NavbarLink>
						<S.OpenLinksButton
							onClick={() => {
								setExtendNavbar((curr) => !curr);
							}}
						></S.OpenLinksButton>
					</S.NavbarLinkContainer>
				</S.LeftContainer>
				<S.RightContainer>
					{!user&&<S.NavbarLink to='/login'>Login</S.NavbarLink>}		
					{user&&<S.Logout href={process.env.REACT_APP_BASE_URL+ 'api/logout'}  >Logout</S.Logout>}		
					{/* <S.NavbarLink to='/SignupPage'>SignUp</S.NavbarLink>  */}
					{/* <S.Logo src={"https://www.pexels.com/@pixabay/"}></S.Logo> */}
				</S.RightContainer>
			</S.NavbarInnerContainer>
			{extendNavbar && (
				<S.NavbarExtendedContainer>
					<S.NavbarLinkExtended to='/'> Home</S.NavbarLinkExtended>
					<S.NavbarLinkExtended to='/advanced-search'>
						Advanced Search
					</S.NavbarLinkExtended>
					<S.NavbarLinkExtended to='/popular-actors'>
						Popular Actors
					</S.NavbarLinkExtended>
				</S.NavbarExtendedContainer>
			)}
			<SearchBar></SearchBar>
		</S.NavbarContainer>
	);
}

export default Navbar;
