import styled from "styled-components";

export const Title = styled.h2`
	color: var(--white-color);
	font-size: 2rem;
	text-align: center;
	margin: 20px;
`;

export const RemoveButton = styled.button`
	position: absolute;
	bottom: 10%;
	left: -7%;
	background-color: var(--secondary-color);
	border-radius: 50%;
	border-color: transparent;
	border: 2px whitesmoke solid;
	height: 30px;
	width: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: var(--white-color);
	cursor: pointer;
	&:hover {
		border: 2px gold solid;
		background-color: var(--primary-color);
	}
`;

export const Message = styled.p`
	color: var(--white-color);
	font-size: 20px;
	text-align: center;
	margin: 50px;
`;
