import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const Button = styled.button`
	border: none;
	width: 10%;
	padding: 1% 3%;
	border-radius: 0 0 3rem 3rem;
	background-color: white;
	&:hover {
		background-color: gold;
		color: black;
	}
	cursor: pointer;
`;
