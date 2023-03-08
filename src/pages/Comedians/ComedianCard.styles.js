import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	/* flex-direction: column; */
	align-items: center;
	width: 40%;
	background-color: #010408;
	margin: 0.2rem 0;
`;

export const Details = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	justify-content: space-between;
	margin-left: 2em;
	height: 100%;
`;
export const Title = styled.div`
 display: flex;
 width: 100%;
 justify-content: flex-start;
 
`;
export const Rank = styled.span`
	font-size: 1.5rem;
	color: var(--background-color);
	margin-right: 2%;
`;
export const Name = styled.a`
	font-size: 1.5rem;
	color: var(--background-color);
`;
export const Image = styled.img`
	width: 10rem;
	height:14rem;
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
	margin: 1rem;
`;

export const Role = styled.h3`
	font-size: 1rem;
	color: var(--background-color);
	padding: 1rem 0;
`;
export const Description = styled.p`
	font-size: 1rem;
	color: var(--background-color);
`;
