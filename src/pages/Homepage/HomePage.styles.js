import styled from "styled-components/macro";

export const Container = styled.div`
	overflow: hidden;
`;
export const ButtonsContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	padding: 2rem 0;
`;

export const Button = styled.button`
	background-color: ${({ isSelected }) =>
		isSelected ? "#efcca2" : "transparent"};
	color: var(--primary-color);
	padding: 0.5rem 2rem;
	border-radius: 20px;
	border: solid 0.5px #efcca2;
	font-weight: bold;
	cursor: pointer;
`;
export const h1 = styled.h1`
	color: var(--primary-color);
	font-size: 100px;
	text-shadow: #efcca2 6px 0 7px;
`;
export const h2 = styled.h2`
	color: var(--primary-color);
	font-size: 70px;
`;
export const Img = styled.img`
	width: 35%;
`;
export const HeadersContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	overflow: hidden;
	padding-top: 20px;
`;

export const AddButton = styled.button`
	position: absolute;
	bottom: 10%;
	left: -5%;
	background-color: var(--primary-color);
	border-radius: 50%;
	border-color: transparent;
	height: 35px;
	width: 35px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: var(--white-color);
	cursor: pointer;
`;
export const CarouselWrapper = styled.div`
	display: flex;
	margin: 0 auto;
	justify-content: center;
	align-items: center;
	width: 650px;
	@media screen and (max-width: 460px) {
		width: 100%;
		margin: 0;
		display: block;
	}
`;
