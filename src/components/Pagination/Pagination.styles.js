import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	margin: 1% auto;
`;
export const Icon = styled.i`
	color: whitesmoke;
	font-size: 1.3rem;
`;

export const PageLink = styled(Link)`
	color: ${(props) => (props.isSelected ? "gold" : "whitesmoke")};
	padding: 0 10%;
	text-decoration: none;
	font-size: 1.3rem;
`;
