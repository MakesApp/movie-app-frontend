import styled from "styled-components/macro";

export const ButtonsContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	padding: 3rem 0;
`;

export const Button = styled.button`
	background-color: ${({ isSelected }) =>
		isSelected ? "#efcca2" : "transparent"};
	color: var(--primary-color);
	padding: 0.5rem 2rem;
	border-radius: 20px;
	border: solid 0.5px #efcca2;
	/* font-size: 150%; */
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
export const HeadersContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	padding-top: 40px;
`;
