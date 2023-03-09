import styled from "styled-components/macro";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	width: 13.5rem;
`;
export const PosterContainer = styled.div`
	position: relative;
`;
export const Poster = styled.img`
	height: 350px;
	width: 100%;
	display: block;
	border-radius: 1rem;
	object-fit: cover;
	border: 2px whitesmoke solid;
	box-shadow: rgba(20, 64, 67, 0.3) 0px 1px 2px 0px,
		rgba(20, 64, 67, 0.15) 0px 1px 3px 1px;
	cursor: pointer;
	&:hover {
		border: 2px gold solid;
		box-shadow: gold 0px 1px 2px 0px, gold 0px 1px 3px 1px;
	}
`;
export const Rating = styled.span`
	position: absolute;
	bottom: 10%;
	top: 0.5%;
	left: 15%;
	background-color: var(--white-color);
	border-radius: 0 0 50% 50%;
	height: 35px;
	width: 35px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bold;
	color: var(--primary-color);
`;

export const TitleContainer = styled.div`
	display: flex;
	width: 400px;
	justify-content: space-between;
	flex-direction: column;
	align-items: center;
	margin: 1% 0;
`;
export const Title = styled.label`
	font-size: 14px;
	color: var(--background-color);
	padding-top: 1%;
	width: 200px;
	text-align: center;
	overflow: hidden;
`;
export const Year = styled.span`
	font-size: 14px;
	color: var(--background-color);
	padding-top: 3%;
	color: grey;
	padding-bottom: 3%;
`;
