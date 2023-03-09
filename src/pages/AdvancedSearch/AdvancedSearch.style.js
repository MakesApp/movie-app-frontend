import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
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
