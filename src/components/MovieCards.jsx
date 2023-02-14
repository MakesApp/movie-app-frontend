import { device } from "./device";
import styled from "styled-components";

const MovieCards = styled.div`
	display: flex;
	// Mobile friendly by default
	flex-direction: column;

	border: 1px solid gray;
	box-shadow: 5px 5px #ccc;
	padding: 10px;
	margin: 10px;

	// Switch to rows on large devices
	@media ${device.laptop} {
		flex-direction: row;
	}
`;

export default MovieCards;
