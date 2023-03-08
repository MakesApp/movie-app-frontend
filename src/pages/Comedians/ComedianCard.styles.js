import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 300px;
`;
export const Title = styled.h1`
	font-size: 18px;
	color: var(--background-color);
`;
export const Details = styled.div`
	display: flex;
`;
export const Rank = styled.span`
	font-size: 14px;
	color: var(--background-color);
`;
export const Image = styled.img`
	width: 50%;
	display: block;
	border-radius: 1rem;
	object-fit: cover;
	border: 2px whitesmoke solid;
	box-shadow: rgba(20, 64, 67, 0.3) 0px 1px 2px 0px,
		rgba(20, 64, 67, 0.15) 0px 1px 3px 1px;
	margin: auto;
	cursor: pointer;
	&:hover {
		border: 2px gold solid;
		box-shadow: gold 0px 1px 2px 0px, gold 0px 1px 3px 1px;
	}
`;
export const Name = styled.a`
	display: flex;
`;
export const Role = styled.h3`
	font-size: 14px;
	color: var(--background-color);
`;
export const Description = styled.p`
	display: flex;
`;
