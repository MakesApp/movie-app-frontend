import styled from "styled-components";

export const Container = styled.form`
	display: flex;
	width: 80%;
	justify-content: space-around;
	margin: 2% auto;
	margin-bottom: 0;
	align-items: center;
	border-top: 2px whitesmoke dotted;
	border-bottom: 2px whitesmoke solid;
	box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
		rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
`;
export const Select = styled.select`
	width: 25%;
	padding: 0.5% 0;
	border: 2px whitesmoke solid;
	border-radius: 1rem;
	margin: 1% 0.5%;
	text-align: center;
	cursor: pointer;
	box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
		rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
		rgba(0, 0, 0, 0.09) 0px 32px 16px;
	&:hover {
		background-color: gold;
		color: black;
	}
`;

export const Option = styled.option`
	text-align: center;
`;
