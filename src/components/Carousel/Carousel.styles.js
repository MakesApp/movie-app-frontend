import styled from "styled-components/macro";

export const Image = styled.img`
	height: 400px;
	aspect-ratio: 1/1;
	width: 100%;
`;

export const Slide = styled.div`
	position: relative;
	cursor: pointer;
`;

export const Info = styled.div`
	position: absolute;
	width: 95%;
	margin: 2%;
	background-color: black;
	opacity: 0.7;
	height: 50%;
	top: 40%;
	border-radius: 1em;
`;
export const ImageDetail = styled.p`
	color: whitesmoke;
	margin: 1% 0;
	padding: 3%;
	position: absolute;
	top: 55%;
`;
export const Name = styled.h1`
	font-size: 1.5rem;
	font-weight: bold;
	color: gold;
	margin: 1% 0;
	padding: 3%;
	position: absolute;
	top: 45%;
`;
