import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	margin: 1% auto;
`;
export const Icon = styled.i`
	color: white;
`;

export const PageLink = styled(Link)`
	color: ${(props) => (props.isSelected ? "gray" : "white")};
	padding: 0 10%;
	text-decoration: none;
`;
