import styled from "styled-components/macro";

export const Container = styled.div``;
export const PosterContainer = styled.div`
	position: relative;
	margin-left: 10px;
`;
export const Poster = styled.img`
	width: 100%;
	display: block;
	height: 20rem;
	object-fit: cover;
`;
export const Rating = styled.span`
	position: absolute;
	bottom: 10%;
	right: -6%;
	background-color: var(--primary-color);
	border-radius: 50%;
	height: 35px;
	width: 35px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: var(--white-color);
`;

export const TitleContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	flex-direction: column;
`;
export const Title = styled.h2`
	font-size: 14px;
	color: var(--background-color);
	padding-top: 5%;
`;
export const Year = styled.span`
	font-size: 14px;
	color: var(--background-color);
	padding-top: 3%;
	color: grey;
`;

export const AddButton = styled.button`
	position: absolute;
	bottom: 10%;
	left: -6%;
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

export const RemoveButton = styled.button`
	position: absolute;
	bottom: 10%;
	left: -6%;
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