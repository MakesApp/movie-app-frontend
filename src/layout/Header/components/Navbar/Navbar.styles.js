import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
	width: 100%;
	background-color: #181823;
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 1rem;
`;

export const LeftContainer = styled.div`
	display: flex;
`;

export const RightContainer = styled.div`
	display: flex;
`;

export const NavbarInnerContainer = styled.div`
	width: 100%;
	height: 80px;
	display: flex;
`;

export const NavbarLinkContainer = styled.div`
	display: flex;
	align-items: center;
`;

export const NavbarLink = styled(Link)`
	color: #efcca2;
	font-size: x-large;
	font-size: 1.3rem;
	text-decoration: none;
	margin: 0 10px;
	&:hover {
		color: white;
	}
	@media (max-width: 700px) {
		display: none;
	}
`;

export const Logout = styled.a`
	color: #efcca2;
	font-size: x-large;
	font-family: Arial, Helvetica, sans-serif;
	text-decoration: none;
	margin: 10px;
`;
export const NavbarLinkExtended = styled(Link)`
	color: white;
	font-size: x-large;
	font-family: Arial, Helvetica, sans-serif;
	text-decoration: none;
`;

export const NavbarExtendedContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (min-width: 700px) {
		display: none;
	}
`;
